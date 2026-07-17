"use client";
import { useState } from "react";

const WA_SVG = (
  <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const waMessage = `Hello, I'm ${form.name || "a visitor"}. ${form.message || "I'd like to enquire about Ghar Aarogyam."}`;
  const waLink = `https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="pt-[100px] min-h-screen bg-[#F0F9FF]">

      {/* Hero Banner */}
      <section className="bg-[#7CC043] py-14 text-center text-white">
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 20px" }}>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Get in Touch</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "rgba(255,255,255,0.9)", display: "block", width: "100%" }}>
            We&apos;re here to help. Reach out via email or WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content — Left: Info, Right: Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-12 items-start">

          {/* ── LEFT: Info Panel ── */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#e8f5d9] text-[#1a3d06] text-xs font-bold tracking-widest uppercase mb-4">
                CONTACT US
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-4">
                Let&apos;s start your<br />
                <span className="text-[#7CC043]">wellness journey</span> together
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Have a question about our program? Want to know if we serve your area? Or just need some guidance on your health journey? Our dedicated team is always ready to help you.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#e8f5d9] flex items-center justify-center text-[#7CC043] flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</div>
                  <div className="font-semibold text-gray-800 text-sm">1-800-AAROGYAM</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#e8f5d9] flex items-center justify-center text-[#7CC043] flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</div>
                  <div className="font-semibold text-gray-800 text-sm">info@gharaarogyam.in</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#e8f5d9] flex items-center justify-center text-[#7CC043] flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Address</div>
                  <div className="font-semibold text-gray-800 text-sm leading-relaxed">
                    Sewarth Healthcare Pvt Ltd.<br />
                    123 Wellness Avenue, Health City,<br />
                    State, India - 400001
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp quick link */}
            <div className="bg-[#25D366] rounded-2xl p-5 text-white">
              <div className="font-bold text-sm mb-1 flex items-center gap-2">
                {WA_SVG}
                Prefer WhatsApp?
              </div>
              <p className="text-white/85 text-xs mb-4 leading-relaxed">
                Message us directly for a faster response. We reply within minutes during working hours.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#25D366] font-bold px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                {WA_SVG}
                <span className="text-[#25D366]">Open WhatsApp</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="w-full lg:w-7/12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-black text-gray-800 mb-6">Send us a message</h2>

            {status === "success" ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#e8f5d9] flex items-center justify-center text-[#7CC043] mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-6 text-sm text-[#BAEAF7] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-4">{errMsg}</div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC043] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC043] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. ramesh@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC043] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7CC043] transition-all resize-none"
                  />
                </div>

                {/* Two send buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 bg-[#FF9800] hover:bg-[#e68900] text-white font-bold py-3.5 rounded-full text-sm transition-all shadow-md disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                    ) : (
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    )}
                    {status === "loading" ? "Sending..." : "Send via Email"}
                  </button>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3.5 rounded-full text-sm transition-all shadow-md"
                  >
                    {WA_SVG}
                    Send via WhatsApp
                  </a>
                </div>

                <p className="text-xs text-gray-400 text-center pt-1">
                  Both buttons use the info you fill above. WhatsApp opens instantly; Email is sent to our team.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
