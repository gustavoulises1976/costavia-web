"use client";

import { useContactForm } from "./useContactForm";

export default function ContactFormMobile() {
  const { formData, status, errorMessage, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section className="relative w-full bg-white px-6 py-12">
      <style>{`
        .contact-form-mobile input::placeholder,
        .contact-form-mobile textarea::placeholder {
          color: #7B7B7B;
        }
      `}</style>
      <div className="flex flex-col gap-12">
        {/* Text content */}
        <div>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "15px",
              lineHeight: "100%",
              letterSpacing: "0.04em",
              verticalAlign: "middle",
              textTransform: "uppercase",
              marginBottom: "16px",
              color: "black",
              paddingBottom: "10px",
            }}
          >
            Contacto
          </p>

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "27px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              marginBottom: "12px",
              color: "black",
            }}
          >
            Conocé más sobre
          </p>
          <h2
            style={{
              fontFamily: '"Utopia Std", "Georgia", serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "27px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              marginBottom: "12px",
              color: "black",
              paddingBottom: "10px",
            }}
          >
            la gran vida costavia
          </h2>

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "139%",
              letterSpacing: "0%",
              color: "black",
              marginBottom: "30px",
            }}
          >
            Contactate con nosotros completando el formulario o llamando a
            nuestras líneas telefónicas.
          </p>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "12.21px",
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "black",
            }}
          >
            OBRING
            <br />
            +54 9 3412 10-8514
          </p>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "12.21px",
              lineHeight: "150%",
              letterSpacing: "0%",
              marginTop: "12px",
              color: "black",
            }}
          >
            ROSENTAL INVERSIONES
            <br />
            +54 9 3416 71-8710
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="contact-form-mobile space-y-10"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nombre y apellido"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "103%",
                letterSpacing: "0%",
                color: "black",
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "103%",
                letterSpacing: "0%",
                color: "black",
              }}
            />
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Celular"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "103%",
                letterSpacing: "0%",
                color: "black",
              }}
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Mensaje (opcional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
              rows={1}
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "103%",
                letterSpacing: "0%",
                resize: "none",
                color: "black",
              }}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full border border-black bg-transparent py-3 text-black hover:bg-black hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              disabled={status === "sending"}
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "103%",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                textTransform: "uppercase",
              }}
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {status === "success" && (
              <p
                role="status"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontSize: "14px",
                  lineHeight: "139%",
                  marginTop: "12px",
                  color: "black",
                }}
              >
                ¡Gracias! Recibimos tu consulta y te vamos a contactar a la
                brevedad.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontSize: "14px",
                  lineHeight: "139%",
                  marginTop: "12px",
                  color: "#B00020",
                }}
              >
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
