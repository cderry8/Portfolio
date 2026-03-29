"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const FIELD =
  "w-full rounded-xl border border-zinc-700/90 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30";

export default function MessageForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setResult(null);
    try {
      await emailjs.send(
        "service_uqztmaj",
        "template_3cs4qrm",
        { name: form.name, email: form.email, message: form.message },
        "NynwdPUsUgbrIajXY"
      );
      setResult("ok");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setResult("err");
    }
    setBusy(false);
  };

  return (
    <motion.div
      className="surface-card rounded-2xl p-6 sm:p-8"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="font-heading text-lg font-semibold text-zinc-100">Message</h2>
      <p className="mt-1 text-xs text-zinc-500">All fields required.</p>

      {result === "ok" ? (
        <p className="mt-4 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Sent. I will get back to you shortly.
        </p>
      ) : null}
      {result === "err" ? (
        <p className="mt-4 rounded-lg border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          Could not send. Please email me directly.
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            autoComplete="name"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            autoComplete="email"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="cf-msg" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Message
          </label>
          <textarea
            id="cf-msg"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={5}
            className={`${FIELD} resize-y min-h-[120px]`}
          />
        </div>
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:opacity-50"
        >
          {busy ? "Sending…" : "Send"}
        </button>
      </form>
    </motion.div>
  );
}
