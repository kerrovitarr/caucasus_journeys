"use client";

import { FormEvent, useEffect, useState } from "react";
import { contactEmail } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  location: string;
  countries: string;
  duration: string;
  travelType: string;
  travellerCount: string;
  interests: string[];
  language: string;
  season: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  location: "",
  countries: "",
  duration: "",
  travelType: "",
  travellerCount: "",
  interests: [],
  language: "",
  season: "",
  budget: "",
  message: ""
};

const requiredTextFields: Array<keyof Pick<FormState, "fullName" | "email" | "countries" | "duration" | "travelType" | "travellerCount" | "language">> = [
  "fullName",
  "email",
  "countries",
  "duration",
  "travelType",
  "travellerCount",
  "language"
];

const interestOptions = [
  "Sacred sites",
  "Food & wine",
  "Festivals",
  "Cognac & coffee",
  "Lake Sevan",
  "Silk Road",
  "Ateliers",
  "Mountains",
  "Family history"
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const country = params.get("country");
    const duration = params.get("duration");
    const style = params.get("style");
    const interest = params.get("interest");
    const language = params.get("language");

    if (!country && !duration && !style && !interest && !language) {
      return;
    }

    setForm((current) => ({
      ...current,
      countries: country || current.countries,
      duration: duration || current.duration,
      travelType: style || current.travelType,
      language: language || current.language,
      interests: interest && !current.interests.includes(interest) ? [...current.interests, interest] : current.interests
    }));
  }, []);

  function updateField(field: keyof Omit<FormState, "interests">, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function toggleInterest(interest: string) {
    setForm((current) => {
      const hasInterest = current.interests.includes(interest);
      return {
        ...current,
        interests: hasInterest
          ? current.interests.filter((item) => item !== interest)
          : [...current.interests, interest]
      };
    });
    setErrors((current) => ({ ...current, interests: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    requiredTextFields.forEach((field) => {
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
      "",
      "Trip choices:",
      `Country route: ${form.countries}`,
      `Preferred length: ${form.duration}`,
      `Travel style: ${form.travelType}`,
      `Traveller count / party size: ${form.travellerCount}`,
      `Guide language: ${form.language}`,
      `Preferred season: ${form.season || "Not provided"}`,
      `Budget orientation: ${form.budget || "Not provided"}`,
      `Interests: ${form.interests.length ? form.interests.join(", ") : "Not selected"}`,
      "",
      "Extra notes:",
      form.message || "No extra notes yet."
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
            Your email app should open with the choices filled in. If it does not, use the link below or write directly
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
            Country route
            <select
              className={inputClass}
              value={form.countries}
              onChange={(event) => updateField("countries", event.target.value)}
              required
            >
              <option value="">Select route</option>
              <option>Armenia</option>
              <option>Georgia</option>
              <option>Armenia + Georgia</option>
              <option>Not sure yet</option>
            </select>
            {errors.countries ? <span className="mt-2 block text-sm text-pomegranate">{errors.countries}</span> : null}
          </label>
          <label className={labelClass}>
            Preferred length
            <select
              className={inputClass}
              value={form.duration}
              onChange={(event) => updateField("duration", event.target.value)}
              required
            >
              <option value="">Select length</option>
              <option>Few days</option>
              <option>About one week</option>
              <option>10-14 days</option>
              <option>Not sure yet</option>
            </select>
            {errors.duration ? <span className="mt-2 block text-sm text-pomegranate">{errors.duration}</span> : null}
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Travel style
            <select
              className={inputClass}
              value={form.travelType}
              onChange={(event) => updateField("travelType", event.target.value)}
              required
            >
              <option value="">Select style</option>
              <option>Private trip</option>
              <option>Private trip for one person</option>
              <option>Private couple / family trip</option>
              <option>Own formed group</option>
              <option>Join a forming group</option>
              <option>Not sure yet</option>
            </select>
            {errors.travelType ? <span className="mt-2 block text-sm text-pomegranate">{errors.travelType}</span> : null}
          </label>
          <label className={labelClass}>
            Traveller count / party size
            <input
              className={inputClass}
              value={form.travellerCount}
              onChange={(event) => updateField("travellerCount", event.target.value)}
              placeholder="1, couple, family of 4, group of 18..."
              required
            />
            {errors.travellerCount ? <span className="mt-2 block text-sm text-pomegranate">{errors.travellerCount}</span> : null}
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Preferred language
            <select
              className={inputClass}
              value={form.language}
              onChange={(event) => updateField("language", event.target.value)}
              required
            >
              <option value="">Select language</option>
              <option>German</option>
              <option>French</option>
              <option>Armenian</option>
              <option>English</option>
              <option>Russian</option>
              <option>Not sure yet</option>
            </select>
            {errors.language ? <span className="mt-2 block text-sm text-pomegranate">{errors.language}</span> : null}
          </label>
          <label className={labelClass}>
            Preferred season optional
            <input
              className={inputClass}
              value={form.season}
              onChange={(event) => updateField("season", event.target.value)}
              placeholder="spring, September, flexible..."
            />
          </label>
        </div>

        <fieldset>
          <legend className={labelClass}>Interests optional</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {interestOptions.map((interest) => {
              const checked = form.interests.includes(interest);
              return (
                <label key={interest} className="cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleInterest(interest)}
                  />
                  <span
                    className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      checked
                        ? "border-wine bg-wine text-paper"
                        : "border-wine/20 bg-ivory text-wine hover:border-wine"
                    }`}
                  >
                    {interest}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Budget orientation optional
            <input
              className={inputClass}
              value={form.budget}
              onChange={(event) => updateField("budget", event.target.value)}
              placeholder="comfortable, private premium, price-sensitive..."
            />
          </label>
          <label className={labelClass}>
            Country / city optional
            <input
              className={inputClass}
              value={form.location}
              onChange={(event) => updateField("location", event.target.value)}
            />
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
            Organisation optional
            <input
              className={inputClass}
              value={form.organisation}
              onChange={(event) => updateField("organisation", event.target.value)}
            />
          </label>
        </div>

        <label className={labelClass}>
          Extra notes optional
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Anything important: mobility, family roots, must-see places, hotel level..."
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-forest/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit">Send Request</Button>
          <div className="text-sm leading-6 text-stone sm:max-w-md">
            <p>
              Or email directly:{" "}
              <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
            <p className="mt-2">Final route, price and booking steps are confirmed with Arminius in Armenia.</p>
          </div>
        </div>
      </form>
    </div>
  );
}
