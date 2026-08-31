"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error ?? "No se pudo enviar el mensaje.");
      }

      setFormData(EMPTY_FORM);
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje. Intentá de nuevo más tarde.",
      );
      setStatus("error");
    }
  };

  return { formData, status, errorMessage, handleChange, handleSubmit };
}
