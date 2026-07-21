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
    <section className="py-25 my-10" id="contact">
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-12 items-center">

        {/* Left: Text */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white" style={{ backgroundColor: "#FF9800" }}>CONTACT US</div>
          <h2 className="text-3xl md:text-4xl font-light text-[#0f172a] leading-tight">
            Let's start your <br />
            <span className="font-bold" style={{ color: "#7CC043" }}>wellness journey</span> together
          </h2>
          {/* <p className="text-black/70 leading-relaxed text-sm" style={{ display: "block", width: "100%" }}>
              Have any queries about our services? Please email or WhatsApp us and our team will get back to you shortly.
            </p> */}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = fd.get("name") as string;
              const msg = fd.get("message") as string;
              window.open(`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'm ${name}. ${msg}`)}`, "_blank");
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Full Name *</label>
                <input name="name" required placeholder="e.g. Ramesh Sharma" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2" style={{ ['--tw-ring-color' as string]: '#7CC043' }} />
              </div>
              <div>
                <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Phone</label>
                <input name="phone" type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Email *</label>
              <input name="email" type="email" required placeholder="e.g. ramesh@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2" />
            </div>
            <div>
              <label className="block text-xs font-bold text-black/50 uppercase tracking-wider mb-2">Message *</label>
              <textarea name="message" required rows={4} placeholder="Tell us how we can help you..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 resize-none" />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:info@gharaarogyam.in"
                title="Send via Email"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:opacity-90"
                style={{ backgroundColor: "#0056b3" }}
              >
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </a>
              <button
                type="submit"
                title="Send via WhatsApp"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
