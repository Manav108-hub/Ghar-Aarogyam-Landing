import { plans } from "@/index/constant";

export default function Subscription() {


  return (
    <main className="pt-[100px] min-h-screen bg-[#F0F9FF]">
      {/* Hero */}
      <section className="py-16 text-center text-white" style={{ background: 'linear-gradient(135deg, #7CC043 0%, #BAEAF7 100%)' }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 20px" }}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-5">
            PRICING PLANS
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Join the Program</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "rgba(255,255,255,0.9)", display: "block", width: "100%" }}>
            Choose the plan that works best for you and your family. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {plans.map((plan, i) => (
              <div
                key={plan.label}
                className={`flex flex-col p-8 relative ${i < plans.length - 1 ? "border-b sm:border-b-0 sm:border-r border-gray-200" : ""
                  } ${plan.highlight ? "bg-[#F0F9FF]" : "bg-white"}`}
              >
                {/* Plan label */}
                <div className="text-xs font-bold text-gray-500 mb-3 tracking-widest uppercase">
                  {plan.crossedLabel ? (
                    <>
                      <span className="line-through text-gray-400">{plan.crossedLabel}</span>
                      {plan.label.replace(plan.crossedLabel, "")}
                    </>
                  ) : (
                    plan.label
                  )}
                </div>

                {/* Price */}
                <div className="text-5xl font-black text-gray-900 mb-2">{plan.price}</div>

                {/* Consultations & Validity */}
                <div className="text-sm text-gray-500 mb-1">
                  {plan.consultations} · {plan.crossedLabel ? (
                    <span className="line-through text-gray-400">{plan.validity}</span>
                  ) : (
                    plan.validity
                  )}
                </div>

                {/* Tagline or Savings */}
                {plan.tagline && (
                  <div className="flex items-center gap-1 text-sm text-[#7CC043] font-semibold mt-2">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    {plan.tagline}
                  </div>
                )}
                {plan.savings && (
                  <div className="mt-3">
                    <span className="inline-block bg-[#e8f5d9] text-[#1a3d06] text-xs font-bold px-3 py-1.5 rounded-md">
                      {plan.savings}
                    </span>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="block text-center font-bold py-2.5 rounded-full text-sm transition-all border-2 border-[#BAEAF7] text-[#BAEAF7] hover:bg-[#BAEAF7] hover:text-white"
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-4 bg-[#e8f5d9] border border-[#c5e0aa] rounded-xl px-6 py-4 text-center text-sm text-gray-600">
            1 medical query = 1 consultation · Each session runs 8–10 minutes · Unused consultations do not carry forward after validity ends.
          </div>
        </div>
      </section>

      {/* Steps to join */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 text-center mb-12">How to Join</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "person_add", title: "Choose a Plan", desc: "Select the plan that fits your family's needs." },
              { step: "2", icon: "phone_callback", title: "We Call You", desc: "Your dedicated health coach will call within 24 hours." },
              { step: "3", icon: "download", title: "Download the App", desc: "Get the Ghar Aarogyam app on your phone." },
              { step: "4", icon: "favorite", title: "Start Your Journey", desc: "Begin your personalised health support program." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#7CC043] text-white font-black text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {s.step}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#e8f5d9] flex items-center justify-center text-[#7CC043] mx-auto mb-3">
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Download app banner */}
          <div className="mt-16 bg-[#7CC043] rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-black mb-3">Download the Ghar Aarogyam App</h3>
            <p className="text-white/85 mb-6 text-sm" style={{ display: "block", width: "100%" }}>
              Manage your health journey, get reminders, connect with your coach, and use the panic button — all from your phone.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors">
                {/* Google Play SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.58-2.93-2.93L3.18 23.76zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.5 1.56l.08.08 10.13-10.13v-.24L.58 1.32.5 1.4zM20.38 10.3l-2.88-1.66-3.17 3.17 3.17 3.17 2.9-1.67c.83-.48.83-1.26-.02-1.74v.73zM4.17.24l12.6 11.58-2.93 2.93L3.18.28c.3-.04.64.0.99.2l-.0-.24z" />
                </svg>
                Google Play
              </a>
              <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors">
                {/* Apple SVG */}
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
