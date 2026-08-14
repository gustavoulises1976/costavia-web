"use client";

import { useState } from "react";

export default function ContactFormDesktop() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="relative h-[593px] w-full bg-[#f4f1ec]">
      <style>{`
        .contact-form-desktop input::placeholder,
        .contact-form-desktop textarea::placeholder {
          color: #7B7B7B;
        }
      `}</style>
      <div className="mx-auto flex h-full max-w-7xl">
        {/* Left side: Text content */}
        <div className="flex w-1/2 flex-col justify-start px-12 py-16">
          <div>
            <p
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "32px",
                lineHeight: "103%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                marginBottom: "16px",
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
                fontSize: "32px",
                lineHeight: "103%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                color: "black",
                marginBottom: "32px",
              }}
            >
              la gran vida costavia
            </h2>
            <p
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "139%",
                letterSpacing: "0%",
                color: "black",
                marginBottom: "8px",
              }}
            >
              Contactate con nosotros completando el formulario o llamando a
              nuestras líneas telefónicas.
            </p>
          </div>

          <div className="mt-10">
            <p
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "14px",
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
                fontSize: "14px",
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
        </div>

        {/* Right side: Form */}
        <div className="contact-form-desktop flex w-1/2 items-start px-12 pt-16">
          <form onSubmit={handleSubmit} className="w-full space-y-8">
            <div>
              <label htmlFor="name" className="sr-only">
                Nombre y apellido
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre y apellido"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
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
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
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
                placeholder="Celular"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
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
                  fontSize: "20px",
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
                className="w-full border border-black bg-transparent py-3 hover:bg-black hover:text-white transition-colors"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "103%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                  textTransform: "uppercase",
                  color: "black",
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
