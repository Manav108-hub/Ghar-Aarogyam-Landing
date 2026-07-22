"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrMsg("Please fill in your Name, Email, and Message.");
      return;
    }

    // Open WhatsApp directly
    handleWhatsApp();

    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrMsg(err?.message || "Something went wrong. Please try again.");
    }
  };

  const handleWhatsApp = () => {
    const text = `Hi Ghar Aarogyam,\n\nName: ${form.name || "a visitor"}\nEmail: ${form.email}${form.phone ? `\nPhone: ${form.phone}` : ""}\n\nQuery:\n${form.message || "I'd like to enquire about Ghar Aarogyam."}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-20 my-10" id="contact">
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-12 items-center">

        {/* Left: Text */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white" style={{ backgroundColor: "#FF9800" }}>CONTACT US</div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0f172a] leading-tight">
            Let's start your <br />
            <span className="font-bold" style={{ color: "#7CC043" }}>wellness journey</span> together
          </h2>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#7CC043" }}>
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </div>
              <div>
                <div className="text-xs font-bold text-black/40 uppercase tracking-wider">Email Us</div>
                <div className="font-semibold text-black text-sm">info@gharaarogyam.in</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#7CC043" }}>
                <span className="material-symbols-outlined text-[18px]">call</span>
              </div>
              <div>
                <div className="text-xs font-bold text-black/40 uppercase tracking-wider">ADDRESS</div>
                <div className="font-semibold text-black text-sm">Address : Sewarth Healthcare Pvt Ltd, Flat No. 106, First Floor, Block B, Datt Township, Bihari, Jabalpur (MP) – 482020, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-7/12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h3 className="text-lg font-black text-black mb-6">Send us a message</h3>

          {status === "success" && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              Thank you! Your message has been sent successfully. Check your email for confirmation.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">error</span>
              {errMsg}
            </div>
          )}

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ramesh Sharma"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2"
                  style={{ ['--tw-ring-color' as string]: '#7CC043' }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="e.g. ramesh@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us how we can help you..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-black/50 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#7CC043]">verified</span>
                Sends message via Email & WhatsApp
              </span>
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#7CC043] hover:bg-[#6ba838] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto flex items-center justify-center gap-2 text-base"
              >
                {status === "loading" ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    Send
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
