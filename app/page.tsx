"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    { initials: "SD", name: "Sunita Devi, 58", city: "Sagar", color: "#7CC043", quote: "Now I know exactly when to take each tablet. My son used to worry, now he doesn't have to." },
    { initials: "RP", name: "Ramesh Patel, 64", city: "Gwalior", color: "#FF9800", quote: "I pressed the Panic Button and within minutes my daughter and the ambulance were both informed." },
    { initials: "KS", name: "Kavita Sharma, 45", city: "Jabalpur", color: "#BAEAF7", quote: "Diet, doctor and counsellor — all in one app. I don't have to explain my history again and again." },
    { initials: "AT", name: "Anil Tiwari, 70", city: "Rewa", color: "#7CC043", quote: "After my wife passed, the counsellor sessions gave me someone to talk to on the hard days." },
    { initials: "PM", name: "Priya Mishra, 38", city: "Satna", color: "#FF9800", quote: "The diet plan was exactly what my mother needed after her surgery. Simple, practical, effective." },
  ];

  const cities = [
    { division: "Jabalpur Division", tags: ["Jabalpur", "Katni", "Chhindwara", "Mandla"] },
    { division: "Rewa Division", tags: ["Rewa", "Satna", "Sidhi"] },
    { division: "Sagar Division", tags: ["Sagar", "Chhatarpur", "Damoh", "Panna"] },
    { division: "Gwalior Division", tags: ["Gwalior", "Datia", "Shivpuri"] },
    { division: "Ujjain Division", tags: ["Ujjain", "Mandsaur", "Ratlam"] },
    { division: "Bhopal Division", tags: ["Bhopal", "Raisen", "Sehore"] },
  ];

  return (
    <main className="pt-[90px]">

      {/* ── 1. HERO — bg: #BAEAF7 → #ECEFF1 gradient ── */}
      <section style={{ background: "linear-gradient(135deg, #BAEAF7 0%, #ECEFF1 100%)" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-20 flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/40 text-black text-xs font-bold tracking-widest uppercase">
              WELCOME TO GHAR AAROGYAM
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight" style={{ color: "#7CC043" }}>
              Right Advice,<br />
              <span style={{ color: "#000" }}>The Path to Health</span>
            </h1>
            <p className="text-base md:text-lg text-black/80 leading-relaxed" style={{ display: "block", width: "100%" }}>
              Ghar Aarogyam is a comprehensive AI driven Patient Support Program designed to empower patients and caregivers with timely guidance, emotional support, and healthcare assistance from the comfort of their homes.
            </p>
            <p className="text-2xl md:text-3xl font-bold" style={{ color: "#7CC043", fontFamily: "var(--font-hindi), serif" }}>
              सही सलाह – आरोग्य की राह
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-black/10">
              {[
                { num: "10,000+", label: "Families Enrolled" },
                { num: "50+", label: "Expert Counsellors" },
                { num: "24/7", label: "Care Available" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black" style={{ color: "#FF9800" }}>{s.num}</div>
                  <div className="text-xs font-semibold text-black/60 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/subscription" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full shadow-lg text-base text-white transition-all hover:opacity-90" style={{ backgroundColor: "#FF9800" }}>
              Join the Program
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="w-full md:flex-1">
            <Image src="/hero.png" alt="Ghar Aarogyam" width={600} height={500} className="w-full h-auto rounded-2xl shadow-2xl object-cover" priority />
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE US — bg: white ── */}
      <section className="py-20 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>WHY CHOOSE US</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Why choose Ghar Aarogyam?</h2>
            <p className="mt-3 text-black/60 text-sm" style={{ display: "block", width: "100%" }}>We understand managing health can be overwhelming. We make it simpler.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "schedule", title: "Timely Guidance", desc: "Get the right advice exactly when you need it, avoiding unnecessary confusion and delays." },
              { icon: "psychology", title: "Emotional Support", desc: "Mental well-being is crucial to recovery. We offer compassionate emotional care throughout." },
              { icon: "home_health", title: "Care at Home", desc: "Access professional healthcare assistance from your home, without repeated hospital visits." },
            ].map((item) => (
              <div key={item.title} className="bg-white border-2 rounded-2xl p-8 hover:shadow-xl transition-shadow" style={{ borderColor: "#ECEFF1" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-5" style={{ backgroundColor: "#BAEAF7" }}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#FF9800" }}>{item.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. UNIQUE SERVICES — bg: #ECEFF1 ── */}
      <section className="py-20" style={{ backgroundColor: "#ECEFF1" }} id="services">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>WHAT WE OFFER</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Unique Services</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: "Sanjeevani — Expert Diet Consultation", desc: "Tailored dietary advice crafted by specialists to suit your health goals and medical history, aiding faster recovery and sustained wellness." },
              { title: "Mitra — Psychological Counseling", desc: "Compassionate mental health support to help patients and caregivers navigate the emotional stress of managing health conditions." },
              { title: "Margdarshak — Health Coach", desc: "A dedicated health partner to guide you through your care journey, monitor progress, and ensure adherence to prescribed treatment plans." },
              { title: "Suraksha — Panic Button", desc: "One-tap emergency alert that instantly notifies your family and connects you to emergency services in critical moments." },
              { title: "Smriti — Medicine Reminders", desc: "Smart, personalized medication reminders so you never miss a dose and stay on track with your treatment plan." },
            ].map((svc, i) => (
              <details key={i} className="group bg-white rounded-xl overflow-hidden border cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: "#ECEFF1" }}>
                <summary className="flex items-center justify-between p-5 font-bold text-black text-sm">
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#FF9800" }}>{i + 1}</span>
                    {svc.title}
                  </span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 flex-shrink-0" style={{ color: "#BAEAF7" }}>expand_more</span>
                </summary>
                <div className="px-5 pb-5 pt-3 text-black/70 text-sm leading-relaxed border-t" style={{ borderColor: "#ECEFF1" }}>
                  {svc.desc}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STANDS APART — bg: #BAEAF7 ── */}
      <section className="py-20" style={{ backgroundColor: "#BAEAF7" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-20 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 hidden md:block">
            <div className="bg-white/20 rounded-3xl p-10 text-center">
              <div className="text-7xl mb-4">🏠</div>
              <p className="text-xl font-bold text-white">Healthcare at home,<br />dignity always.</p>
            </div>
          </div>
          <div className="flex-1 w-full space-y-8">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-black" style={{ backgroundColor: "#ECEFF1" }}>WHAT SETS US APART</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>How Ghar Aarogyam<br />Stands Apart?</h2>
            <ul className="space-y-6">
              {[
                { icon: "verified", title: "Tailored for You", desc: "Every patient's journey is unique. We provide customized care plans, not one-size-fits-all advice." },
                { icon: "all_inclusive", title: "Holistic Approach", desc: "We focus on physical, mental, and emotional well-being simultaneously for complete recovery." },
                { icon: "translate", title: "Bridging the Gap", desc: "Translating complex clinical advice into simple, practical, daily healthy living habits." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1" style={{ backgroundColor: "#FF9800" }}>
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS (scrolling) — bg: white ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-20 text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>FAMILIES SPEAK</div>
          <h2 className="text-3xl md:text-4xl font-black text-black">Real stories, simple support</h2>
        </div>
        <div className="flex gap-6" style={{ display: "flex", width: "max-content", animation: "scroll 35s linear infinite", maskImage: "linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[300px] flex-shrink-0 rounded-2xl p-6 border" style={{ backgroundColor: "#ECEFF1", borderColor: "#ECEFF1" }}>
              <div className="flex mb-3">
                {[...Array(5)].map((_, si) => <span key={si} className="material-symbols-outlined text-[15px]" style={{ color: "#FF9800" }}>star</span>)}
              </div>
              <p className="text-black/80 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: t.color }}>{t.initials}</div>
                <div>
                  <div className="font-bold text-black text-sm">{t.name}</div>
                  <div className="text-black/50 text-xs">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. WHERE WE SERVE (scrolling) — bg: #ECEFF1 ── */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: "#ECEFF1" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-20 text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#BAEAF7" }}>WHERE WE SERVE</div>
          <h2 className="text-3xl md:text-4xl font-black text-black">Now supporting families across<br />Madhya Pradesh</h2>
        </div>
        <div className="flex gap-6" style={{ display: "flex", width: "max-content", animation: "scroll 25s linear infinite reverse", maskImage: "linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)" }}>
          {[...cities, ...cities].map((c, i) => (
            <div key={i} className="w-[250px] flex-shrink-0 bg-white rounded-2xl p-5 border" style={{ borderColor: "#ECEFF1" }}>
              <h4 className="font-bold text-sm flex items-center gap-1 mb-3" style={{ color: "#BAEAF7" }}>
                <span className="material-symbols-outlined text-[16px]" style={{ color: "#FF9800" }}>location_on</span>
                {c.division}
              </h4>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#7CC043" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. GET IN TOUCH — bg: #BAEAF7 ── */}
      <section className="py-20" style={{ backgroundColor: "#BAEAF7" }}>
        <div className="max-w-xl mx-auto px-5 text-center space-y-5">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-black" style={{ backgroundColor: "#ECEFF1" }}>REACH OUT</div>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Get in Touch</h2>
          <p className="text-white/90 leading-relaxed text-sm" style={{ display: "block", width: "100%" }}>
            Ready to start your wellness journey? Our team is always here to help you navigate your path to better health.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full shadow-lg text-base transition-all hover:opacity-90" style={{ backgroundColor: "#FF9800" }}>
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
