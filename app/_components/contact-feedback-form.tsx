"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

const categories = [
  { label: "Ibadah", value: "IBADAH" },
  { label: "Pelayanan", value: "PELAYANAN" },
  { label: "Sarana & Prasarana", value: "SARANA_PRASARANA" },
  { label: "Lainnya", value: "LAINNYA" },
];

type FormState = {
  fullName: string;
  category: string;
  contactInfo: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  category: "IBADAH",
  contactInfo: "",
  message: "",
};

export function ContactFeedbackForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/public/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          category: form.category,
          contactInfo: form.contactInfo || null,
          message: form.message,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Masukan belum berhasil dikirim");
      }

      setForm(emptyForm);
      setSuccessMessage(
        result.message ?? "Terima kasih, masukan Anda sudah terkirim.",
      );
      setSuccessOpen(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Masukan belum berhasil dikirim",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <form
        className="rounded-md border border-slate-200 bg-white shadow-sm"
        onSubmit={submitFeedback}
      >
        <div className="border-b border-slate-200 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-hkbp-link">
            Kritik & Saran
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-normal text-slate-950">
            Masukan Jemaat
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Kami menghargai setiap kritik, saran, dan masukan yang membangun
            demi peningkatan pelayanan gereja. Semua masukan akan diterima
            dengan baik dan digunakan sebagai bahan evaluasi.
          </p>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2">
          {error ? <Alert tone="bad" text={error} /> : null}

          <Field
            label="Nama Lengkap"
            minLength={2}
            maxLength={120}
            required
            value={form.fullName}
            onChange={(value) => update("fullName", value)}
          />
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Kategori
            <select
              className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-hkbp-border focus:ring-2 focus:ring-hkbp-soft"
              required
              value={form.category}
              onChange={(event) => update("category", event.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>
          <div className="md:col-span-2">
            <Field
              label="Email / WhatsApp (Opsional)"
              maxLength={160}
              value={form.contactInfo}
              onChange={(value) => update("contactInfo", value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Pesan
              <textarea
                className="min-h-40 rounded-md border border-slate-300 px-3 py-2 text-sm leading-6 outline-none transition focus:border-hkbp-border focus:ring-2 focus:ring-hkbp-soft"
                maxLength={2000}
                minLength={10}
                required
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end border-t border-slate-200 p-6">
          <button
            className="inline-flex h-11 items-center gap-2 rounded-md bg-hkbp-primary px-4 text-sm font-bold text-white transition hover:bg-hkbp-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            disabled={submitting}
            type="submit"
          >
            {submitting ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="size-4" aria-hidden="true" />
            )}
            Kirim Masukan
          </button>
        </div>
      </form>
      <SuccessDialog
        message={successMessage}
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </section>
  );
}

function SuccessDialog({
  open,
  message,
  onClose,
}: {
  open: boolean;
  message: string;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      aria-labelledby="feedback-success-title"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 px-4"
      role="dialog"
    >
      <div className="w-full max-w-md rounded-md border border-slate-200 bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3
                className="text-lg font-bold text-slate-950"
                id="feedback-success-title"
              >
                Masukan Terkirim
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {message}
              </p>
            </div>
          </div>
          <button
            aria-label="Tutup dialog"
            className="inline-flex size-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
            onClick={onClose}
            type="button"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="flex justify-end p-5">
          <button
            className="inline-flex h-10 items-center rounded-md bg-hkbp-primary px-4 text-sm font-bold text-white transition hover:bg-hkbp-primary-hover"
            onClick={onClose}
            type="button"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  minLength,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <input
        className="h-11 rounded-md border border-slate-300 px-3 text-sm outline-none transition focus:border-hkbp-border focus:ring-2 focus:ring-hkbp-soft"
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function Alert({ text }: { tone: "bad"; text: string }) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 md:col-span-2">
      {text}
    </div>
  );
}
