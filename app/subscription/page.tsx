import { plans } from "@/index/constant";
import Link from "next/link";

export const metadata = {
  title: "Join the Program | Ghar Aarogyam",
  description: "Choose the membership plan that works best for you and your family. No hidden fees. Cancel anytime.",
};

export default function Subscription() {
  return (
    <main className="pt-[100px] min-h-screen bg-[#F0F9FF]">
      {/* Hero */}
      <section className="py-16 text-center text-white" style={{ background: "linear-gradient(135deg, #7CC043 0%, #BAEAF7 100%)" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 20px" }}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-5">
            MEMBERSHIP PLANS
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Join the Program</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "rgba(255,255,255,0.9)", display: "block", width: "100%" }}>
            Woh plan chuniye jo aapke aur aapke family ke liye best ho. Koi hidden fees nahin. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">Apna Plan Chuniye</h2>
            <p className="text-gray-500 mt-2 text-sm">Koi bhi plan shuruaat ke liye sahi hai.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.label}
                className={`flex flex-col rounded-2xl border shadow-sm transition-all hover:shadow-lg ${
                  plan.highlight
                    ? "bg-[#FF9800] text-white border-[#FF9800] shadow-xl scale-[1.02]"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                {/* Plan Header */}
                <div className={`p-6 rounded-t-2xl ${plan.highlight ? "bg-[#e68900]" : "bg-gray-50 border-b border-gray-100"}`}>
                  {plan.tagline && (
                    <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${plan.highlight ? "text-white/80" : "text-[#FF9800]"}`}>
                      {plan.tagline}
                    </div>
                  )}
                  <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
                    {plan.label}
                  </div>
                  <div className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </div>
                  {plan.priceNote && (
                    <div className={`text-xs mt-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.priceNote}</div>
                  )}
                </div>

                {/* Plan Details */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="space-y-1">
                    <div className={`text-sm font-bold ${plan.highlight ? "text-white" : "text-gray-700"}`}>
                      {plan.sessions}
                    </div>
                    <div className={`text-xs ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
                      {plan.validity}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {plan.chooseOne && (
                      <div className={`text-[10px] font-bold italic ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>
                        {plan.chooseOne}
                      </div>
                    )}
                    {plan.services.map((svc) => (
                      <div key={svc} className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-[14px] flex-shrink-0 ${plan.highlight ? "text-white" : "text-[#7CC043]"}`}>
                          check_circle
                        </span>
                        <span className={`text-xs font-semibold ${plan.highlight ? "text-white" : "text-gray-700"}`}>{svc}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-auto text-center text-xs font-bold py-2.5 rounded-full transition-all ${
                      plan.highlight
                        ? "bg-white text-[#FF9800] hover:bg-white/90"
                        : "bg-[#FF9800] text-white hover:bg-[#e68900]"
                    }`}
                  >
                    Abhi Join Karein
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Terms and Conditions */}
          <div className="mt-10 bg-[#e8f5d9] border border-[#c5e0aa] rounded-xl px-6 py-6 text-sm text-[#1a3d06]">
            <h4 className="font-bold mb-3 uppercase tracking-wider text-xs">Terms & Conditions</h4>
            <ul className="list-disc list-outside pl-4 space-y-2 opacity-90 leading-relaxed">
              <li>Validity expire hone ke baad koi consultation carry forward nahin hoga.</li>
              <li>1 Medical Query = 1 Session. Agar ek hi call mein 2 medical queries hain toh woh 2 sessions count honge.</li>
              <li>Ek session ke liye dedicated time = sirf 8-10 minutes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Join — 6 Steps */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>
              SIMPLE STEPS
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">Join The Program — Simple Steps</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "1", icon: "download", title: "App Download Karein", desc: "Play Store se Ghar Aarogyam app download aur install karein." },
              { step: "2", icon: "person_add", title: "Register Karein", desc: "App mein apna profile banayein aur register karein." },
              { step: "3", icon: "checklist", title: "Plan Chuniye", desc: "Apni zaroorat ke hisaab se membership plan select karein." },
              { step: "4", icon: "payments", title: "Payment Karein", desc: "Apna preferred payment method se payment complete karein." },
              { step: "5", icon: "verified", title: "App Activate Ho Jayegi", desc: "Payment hote hi aapki app Membership ID ke saath activate ho jayegi." },
              { step: "6", icon: "favorite", title: "Start Karein!", desc: "Ghar Aarogyam ki services apni membership plan ke anusaar use karna shuru karein." },
            ].map((s) => (
              <div key={s.step} className="text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#7CC043] text-white font-black text-lg flex items-center justify-center shadow-md">
                  {s.step}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#e8f5d9] flex items-center justify-center text-[#7CC043]">
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download app banner */}
      <section className="pb-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <div className="bg-[#7CC043] rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-black mb-3">Ghar Aarogyam App Download Karein</h3>
            <p className="text-white/85 mb-6 text-sm" style={{ display: "block", width: "100%" }}>
              Health journey manage karein, reminders paayein, apne coach se connect karein, aur panic button use karein — sab kuch apne phone se.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.58-2.93-2.93L3.18 23.76zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.5 1.56l.08.08 10.13-10.13v-.24L.58 1.32.5 1.4zM20.38 10.3l-2.88-1.66-3.17 3.17 3.17 3.17 2.9-1.67c.83-.48.83-1.26-.02-1.74v.73zM4.17.24l12.6 11.58-2.93 2.93L3.18.28c.3-.04.64.0.99.2l-.0-.24z" />
                </svg>
                Google Play
              </a>
              <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
