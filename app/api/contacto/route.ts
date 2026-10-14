import nodemailer from "nodemailer";

const FROM = "info@costavia.com.ar";
const TO = "info@costavia.com.ar";

const transporter = nodemailer.createTransport({
  host: "127.0.0.1",
  port: 25,
  secure: false,
  tls: { rejectUnauthorized: false },
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const { name, email, phone, message } = (body ?? {}) as Record<
    string,
    unknown
  >;

  const data = {
    name: typeof name === "string" ? name.trim() : "",
    email: typeof email === "string" ? email.trim() : "",
    phone: typeof phone === "string" ? phone.trim() : "",
    message: typeof message === "string" ? message.trim() : "",
  };

  if (!data.name || !data.email || !data.phone) {
    return Response.json(
      { error: "Nombre, email y celular son obligatorios" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ error: "Email inválido" }, { status: 400 });
  }

  if (Object.values(data).some((value) => value.length > 5000)) {
    return Response.json({ error: "Mensaje demasiado largo" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Web Costavia" <${FROM}>`,
      to: TO,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `Nueva consulta web — ${data.name}`,
      text: [
        `Nombre y apellido: ${data.name}`,
        `Email: ${data.email}`,
        `Celular: ${data.phone}`,
        "",
        "Mensaje:",
        data.message || "(sin mensaje)",
      ].join("\n"),
      html: `
        <h2 style="font-family: Arial, sans-serif;">Nueva consulta desde costavia.com.ar</h2>
        <p style="font-family: Arial, sans-serif;">
          <strong>Nombre y apellido:</strong> ${escapeHtml(data.name)}<br />
          <strong>Email:</strong> ${escapeHtml(data.email)}<br />
          <strong>Celular:</strong> ${escapeHtml(data.phone)}
        </p>
        <p style="font-family: Arial, sans-serif;">
          <strong>Mensaje:</strong><br />
          ${escapeHtml(data.message || "(sin mensaje)").replace(/\n/g, "<br />")}
        </p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contacto] No se pudo enviar el mail:", error);
    return Response.json(
      { error: "No se pudo enviar el mensaje. Intentá de nuevo más tarde." },
      { status: 500 },
    );
  }
}
