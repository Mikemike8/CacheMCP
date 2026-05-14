"use client";

import { FormEvent, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

type NetlifyFormProps = {
  children: ReactNode;
  className: string;
  formName: string;
  id?: string;
  successPath?: string;
};

export function NetlifyForm({ children, className, formName, id, successPath = "/thank-you/" }: NetlifyFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.set("form-name", formName);
    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encodedData.append(key, value);
      }
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify rejected the form submission.");
      }

      router.push(successPath);
    } catch {
      setError("Something went wrong. Please try again or contact Cache 42 directly.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id={id}
      className={className}
      name={formName}
      method="POST"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <input type="hidden" name="form-name" value={formName} />
      {children}
      {error ? (
        <p className="form-status" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
