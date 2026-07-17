export default function Mission() {
  return (
    <main className="pt-[90px] min-h-screen" style={{ backgroundColor: "#BAEAF7" }}>

      {/* Hero */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(135deg, #BAEAF7 0%, #ECEFF1 100%)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 20px" }}>
          <div className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: "#FF9800" }}>
            OUR PURPOSE
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#7CC043" }}>Our Mission</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#000", display: "block", width: "100%" }}>
            Bridging the gap between knowing about health and actually living healthily.
          </p>
        </div>
      </section>

      {/* Content blocks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-10">

          {/* What we stand for */}
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start shadow-sm" style={{ borderLeft: "5px solid #7CC043" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#7CC043" }}>
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color: "#7CC043" }}>What we stand for</h2>
              <p className="text-black/80 leading-relaxed text-sm" style={{ display: "block", width: "100%" }}>
                At Ghar Aarogyam, we believe that every patient deserves more than a prescription. They deserve understanding, clarity, and continuous support. Our mission is to make high-quality healthcare guidance accessible to every Indian family — regardless of where they live or what they earn. We are committed to empowering patients and caregivers with the knowledge, tools, and emotional strength they need to live healthier lives.
              </p>
            </div>
          </div>

          {/* The Problem We Solve */}
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start shadow-sm" style={{ borderLeft: "5px solid #FF9800" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#FF9800" }}>
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color: "#FF9800" }}>The Problem We Solve</h2>
              <p className="text-black/80 leading-relaxed text-sm" style={{ display: "block", width: "100%" }}>
                Millions of patients in India receive a diagnosis but leave the hospital confused. They struggle to understand their condition, follow dietary guidelines, manage their medication schedule, or handle the emotional burden of a chronic illness. Family caregivers are equally lost. Ghar Aarogyam was built to solve exactly this — providing a comprehensive, personalised support system that walks with the patient every step of the way.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start shadow-sm" style={{ borderLeft: "5px solid #BAEAF7" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#BAEAF7" }}>
              <span className="material-symbols-outlined text-2xl" style={{ color: "#000" }}>rocket_launch</span>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color: "#7CC043" }}>Our Vision</h2>
              <p className="text-black/80 leading-relaxed text-sm" style={{ display: "block", width: "100%" }}>
                We envision a future where no patient feels alone in their health journey. A future where every family in India has a trusted health companion — available 24/7, in their language, at their doorstep. Through technology, compassion, and relentless dedication, Ghar Aarogyam is building that future today.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-16" style={{ backgroundColor: "#ECEFF1" }}>
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-black text-center mb-10" style={{ color: "#7CC043" }}>Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "handshake", bg: "#7CC043", title: "Compassion", desc: "We treat every patient and caregiver with genuine care and empathy, always." },
              { icon: "verified", bg: "#FF9800", title: "Integrity", desc: "We provide honest, evidence-based guidance. We never overpromise." },
              { icon: "diversity_3", bg: "#BAEAF7", title: "Inclusivity", desc: "Our care is for everyone — across languages, geographies, and income levels.", dark: true },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: v.bg }}>
                  <span className="material-symbols-outlined" style={{ color: v.dark ? "#000" : "#fff" }}>{v.icon}</span>
                </div>
                <h3 className="font-black text-black mb-2 text-base">{v.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
