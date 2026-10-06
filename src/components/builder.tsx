"use client";

import { useMemo, useState } from "react";
import { brand } from "@/content/brand";
import { customMessage, instagramDmUrl } from "@/lib/dm";

const steps = ["Style", "Wrap", "Details", "Message"];

export function Builder() {
  const [step, setStep] = useState(0);
  const [style, setStyle] = useState(brand.styles[0]?.name ?? "");
  const [wrap, setWrap] = useState(brand.wraps[0]?.name ?? "");
  const [detail, setDetail] = useState(brand.details[0]?.name ?? "");
  const [fulfillment, setFulfillment] = useState(brand.fulfillments[0]?.name ?? "");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [language, setLanguage] = useState("en");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const message = useMemo(
    () =>
      customMessage(brand, {
        style,
        wrap,
        detail,
        fulfillment,
        date,
        name,
        note,
        language: brand.slug === "thebloomsbar" ? language : "en",
      }),
    [style, wrap, detail, fulfillment, date, name, note, language],
  );

  async function finish() {
    setError("");
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setError("Clipboard is blocked in this browser. The note is below — copy it, then open Instagram.");
      setCopied(false);
    }
    window.open(instagramDmUrl(brand.handle), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <ol className="flex gap-3 lg:flex-col">
        {steps.map((label, index) => (
          <li key={label} className="flex items-center gap-3">
            <span
              className="grid h-8 w-8 place-items-center rounded-full border border-line text-xs"
              style={{
                background: index === step ? "var(--accent)" : "transparent",
                color: index === step ? "var(--accent-ink)" : "inherit",
              }}
            >
              {index + 1}
            </span>
            <span className="nav-link">{label}</span>
          </li>
        ))}
      </ol>

      <div className="panel p-5 md:p-7">
        {step === 0 ? (
          <fieldset>
            <legend className="serif text-3xl">What kind of bouquet?</legend>
            <div className="mt-5 grid gap-3">
              {brand.styles.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="choice"
                  data-on={style === item.name}
                  onClick={() => setStyle(item.name)}
                >
                  <strong>{item.name}</strong>
                  <small>{item.blurb}</small>
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend className="serif text-3xl">How should it be wrapped?</legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {brand.wraps.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="choice"
                  data-on={wrap === item.name}
                  onClick={() => setWrap(item.name)}
                >
                  <strong>{item.name}</strong>
                  <small>{item.blurb}</small>
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset className="grid gap-5">
            <legend className="serif text-3xl">The practical details</legend>
            <div className="grid gap-3">
              {brand.details.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="choice"
                  data-on={detail === item.name}
                  onClick={() => setDetail(item.name)}
                >
                  <strong>{item.name}</strong>
                  <small>{item.blurb}</small>
                </button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {brand.fulfillments.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="choice"
                  data-on={fulfillment === item.name}
                  onClick={() => setFulfillment(item.name)}
                >
                  <strong>{item.name}</strong>
                  <small>{item.blurb}</small>
                </button>
              ))}
            </div>
            <label className="grid gap-2 text-sm">
              Date needed
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="min-h-12 rounded-xl border border-line bg-transparent px-3 text-ink"
              />
            </label>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-4">
            <h2 className="serif text-3xl">Your note</h2>
            <p className="text-sm leading-6 text-muted">
              Nothing is charged here, and no prices are listed. The last button copies this note and opens Instagram.
            </p>
            {brand.slug === "thebloomsbar" ? (
              <div className="flex gap-2">
                <button type="button" className="choice" data-on={language === "en"} onClick={() => setLanguage("en")}>
                  English note
                </button>
                <button type="button" className="choice" data-on={language === "es"} onClick={() => setLanguage("es")}>
                  Nota en español
                </button>
              </div>
            ) : null}
            <label className="grid gap-2 text-sm">
              Your name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-12 rounded-xl border border-line bg-transparent px-3"
                placeholder="So they know who is writing"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Card line or extra request
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
                className="rounded-xl border border-line bg-transparent px-3 py-3"
                placeholder="Banner wording, colours, a reference from the feed"
              />
            </label>
            <pre className="note-preview overflow-x-auto whitespace-pre-wrap rounded-xl p-4 text-sm leading-6">
              {message}
            </pre>
            {error ? <p className="text-sm">{error}</p> : null}
            {copied ? (
              <p className="text-sm">Copied. Paste it into the Instagram chat if it does not appear on its own.</p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-6 flex justify-between gap-3">
          <button
            type="button"
            className="btn btn-line"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </button>
          {step < 3 ? (
            <button type="button" className="btn btn-solid" onClick={() => setStep((s) => s + 1)}>
              Next
            </button>
          ) : (
            <button type="button" className="btn btn-solid" onClick={finish}>
              {copied ? "Copied — open DM again" : "Copy note and open DM"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
