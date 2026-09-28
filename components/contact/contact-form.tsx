"use client";

import { useState } from "react";
import { projectTypes } from "@/data/profile";
import type { ContactResult } from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  projectType: (typeof projectTypes)[number];
  message: string;
  website: string;
};

const initial: FormState = {
  name: "",
  email: "",
  projectType: projectTypes[0],
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ContactResult | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setResult(null);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as ContactResult & { fieldErrors?: Record<string, string> };
      if (data.fieldErrors) {
        setErrors(data.fieldErrors);
      }
      setResult(data);
      if (data.ok && data.delivered) {
        setValues(initial);
      }
    } catch {
      setResult({
        ok: false,
        delivered: false,
        message: "The form could not be submitted. Email alyahmedrbk@gmail.com directly.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="card grid gap-5 p-6 sm:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Name
          <input
            className="field"
            name="name"
            autoComplete="name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(event) => setValues({ ...values, name: event.target.value })}
            required
          />
          {errors.name ? (
            <span id="name-error" className="text-sm text-[#c2553d] dark:text-[#e58a74]">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="grid gap-2 text-sm">
          Email
          <input
            className="field"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => setValues({ ...values, email: event.target.value })}
            required
          />
          {errors.email ? (
            <span id="email-error" className="text-sm text-[#c2553d] dark:text-[#e58a74]">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Topic
        <select
          className="field"
          name="projectType"
          value={values.projectType}
          aria-invalid={Boolean(errors.projectType)}
          onChange={(event) =>
            setValues({ ...values, projectType: event.target.value as FormState["projectType"] })
          }
        >
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Message
        <textarea
          className="field min-h-36 resize-y"
          name="message"
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => setValues({ ...values, message: event.target.value })}
          required
        />
        {errors.message ? (
          <span id="message-error" className="text-sm text-[#c2553d] dark:text-[#e58a74]">
            {errors.message}
          </span>
        ) : null}
      </label>
      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => setValues({ ...values, website: event.target.value })}
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button className="btn btn-primary" type="submit" disabled={pending}>
          {pending ? "Sending" : "Send message"}
        </button>
        <a className="text-sm underline" href="mailto:alyahmedrbk@gmail.com">
          Or email directly
        </a>
      </div>
      {result ? (
        <p role="status" className={`text-sm leading-6 ${result.ok ? "text-success" : "text-[#c2553d] dark:text-[#e58a74]"}`}>
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
