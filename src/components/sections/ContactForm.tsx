"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  location: string;
  travelType: string;
  travellerCount: string;
  interest: string;
  language: string;
  season: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  location: "",
  travelType: "",
  travellerCount: "",
  interest: "",
  language: "",
  season: "",
  message: ""
};

const requiredFields: Array<keyof FormState> = [
  "fullName",
  "email",
  "travelType",
  "travellerCount",
  "interest",
  "language",
  "message"
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      setMailtoHref("");
      return;
    }

    const subject = `Journey request from ${form.fullName}`;
    const body = [
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Organisation / community: ${form.organisation || "Not provided"}`,
      `Country / city: ${form.location || "Not provided"}`,
      `Request format: ${form.travelType}`,
      `Traveller count: ${form.travellerCount}`,
      `Interest: ${form.interest}`,
      `Preferred language: ${form.language}`,
      `Preferred season: ${form.season || "Not provided"}`,
      "",
      "Message:",
      form.message
    ].join("\n");
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setSubmitted(true);
    window.location.href = href;
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-forest/20 bg-paper px-4 py-3 text-base text-forest outline-none transition focus:border-wine focus:ring-4 focus:ring-wine/10";
  const labelClass = "text-sm font-semibold text-forest";

  return (
    <div className="rounded-lg border border-forest/10 bg-paper p-5 shadow-lift sm:p-8">
      {submitted ? (
        <div className="mb-6 rounded-lg border border-gold/40 bg-gold/10 p-5 text-forest" role="status">
          <p className="font-display text-2xl">Your request is ready to send.</p>
          <p className="mt-3 text-sm leading-7 text-stone">
            Your email app should open with the details filled in. If it does not, use the link below or write directly
            to{" "}
            <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            .
          </p>
          {mailtoHref ? (
            <a className="mt-4 inline-flex text-sm font-semibold text-wine hover:text-pomegranate" href={mailtoHref}>
              Open email draft again
            </a>
          ) : null}
        </div>
      ) : null}

      {/* Future integration point: replace mailto handoff with Formspree, Resend, Supabase or another service. */}
      <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Full name
            <input
              className={inputClass}
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              autoComplete="name"
              required
            />
            {errors.fullName ? <span className="mt-2 block text-sm text-pomegranate">{errors.fullName}</span> : null}
          </label>
          <label className={labelClass}>
            Email
            <input
              className={inputClass}
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              autoComplete="email"
              type="email"
              required
            />
            {errors.email ? <span className="mt-2 block text-sm text-pomegranate">{errors.email}</span> : null}
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Phone optional
            <input
              className={inputClass}
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              autoComplete="tel"
            />
          </label>
          <label className={labelClass}>
            Organisation / community name optional
            <input
              className={inputClass}
              value={form.organisation}
              onChange={(event) => updateField("organisation", event.target.value)}
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Country / city
            <input className={inputClass} value={form.location} onChange={(event) => updateField("location", event.target.value)} />
          </label>
          <label className={labelClass}>
            Request format
            <select
              className={inputClass}
              value={form.travelType}
              onChange={(event) => updateField("travelType", event.target.value)}
              required
            >
              <option value="">Select format</option>
              <option>I have a formed group / community</option>
              <option>I am one traveller interested in joining a group</option>
              <option>We are a couple interested in joining a group</option>
              <option>We are a family interested in joining a group</option>
              <option>We are friends / relatives interested in joining a group</option>
              <option>Parish / church community</option>
              <option>Club / association / cultural group</option>
              <option>Not sure yet</option>
            </select>
            {errors.travelType ? <span className="mt-2 block text-sm text-pomegranate">{errors.travelType}</span> : null}
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Approximate traveller count or party size
            <input
              className={inputClass}
              value={form.travellerCount}
              onChange={(event) => updateField("travellerCount", event.target.value)}
              placeholder="1, 2, family of 4, community of 20..."
              required
            />
            {errors.travellerCount ? <span className="mt-2 block text-sm text-pomegranate">{errors.travellerCount}</span> : null}
          </label>
          <label className={labelClass}>
            Preferred season
            <input className={inputClass} value={form.season} onChange={(event) => updateField("season", event.target.value)} />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Type of journey interest
            <select className={inputClass} value={form.interest} onChange={(event) => updateField("interest", event.target.value)} required>
              <option value="">Select interest</option>
              <option>Sacred & Pilgrimage</option>
              <option>Culture / Wine / History</option>
              <option>Festivals / Celebrations</option>
              <option>Cognac / Coffee / City culture</option>
              <option>Lake Sevan / Nature</option>
              <option>Ateliers / Craft / Clothing</option>
              <option>Food / Wine / Hospitality</option>
              <option>Signature Journey</option>
              <option>Custom / not sure yet</option>
            </select>
            {errors.interest ? <span className="mt-2 block text-sm text-pomegranate">{errors.interest}</span> : null}
          </label>
          <label className={labelClass}>
            Preferred language
            <select className={inputClass} value={form.language} onChange={(event) => updateField("language", event.target.value)} required>
              <option value="">Select language</option>
              <option>German</option>
              <option>French</option>
              <option>Armenian</option>
              <option>English</option>
              <option>Russian</option>
            </select>
            {errors.language ? <span className="mt-2 block text-sm text-pomegranate">{errors.language}</span> : null}
          </label>
        </div>

        <label className={labelClass}>
          Message, wishes and must-haves
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            required
          />
          {errors.message ? <span className="mt-2 block text-sm text-pomegranate">{errors.message}</span> : null}
        </label>

        <div className="flex flex-col gap-4 border-t border-forest/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit">Send Request</Button>
          <div className="text-sm leading-6 text-stone sm:max-w-md">
            <p>
              Or contact us directly:{" "}
              <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
            <p className="mt-2">
              This inquiry does not create a booking. Final offer, payment and travel documents are prepared with
              Arminius in Armenia.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
