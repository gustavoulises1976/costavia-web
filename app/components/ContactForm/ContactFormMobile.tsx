"use client";

import { useState } from "react";

export default function ContactFormMobile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <section className="relative w-full bg-[#f4f1ec] px-6 py-12">
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
              fontSize: "24px",
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
              fontSize: "24px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              marginBottom: "16px",
              color: "black",
            }}
          >
            la gran vida costavia
          </h2>

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "139%",
              letterSpacing: "0%",
              color: "black",
              marginBottom: "8px",
            }}
          >
            Contactate con nosotros completando el formulario o llamando a nuestras líneas telefónicas.
          </p>

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "150%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              marginBottom: "12px",
              marginTop: "0px",
              color: "black",
            }}
          >
            Datos de contacto
          </p>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "12px",
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "black",
            }}
          >
            OIRING
            <br />
            +54 9 3412 10-8514
          </p>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "12px",
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
        <form onSubmit={handleSubmit} className="contact-form-mobile space-y-8">
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
              className="w-full border border-black bg-transparent py-3 hover:bg-black hover:text-white transition-colors"
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
                color: "black",
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
