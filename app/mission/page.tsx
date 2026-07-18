export default function Mission() {
  return (
    <main className="pt-[90px] min-h-screen" style={{ backgroundColor: "#BAEAF7" }}>

      {/* Hero & Mission Statement */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ECEFF1 100%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#FF9800" }}>Our Mission</h1>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#FF9800" }}>Your Health, Our Priority</h2>
          <p className="text-lg leading-relaxed mb-10 font-medium" style={{ color: "#0056b3" }}>
            To improve patient well-being by providing access to healthcare support services that complement the care prescribed by treating healthcare professionals.
          </p>

          <p className="leading-relaxed text-base max-w-3xl mx-auto" style={{ color: "#0056b3" }}>
            From emergency assistance to expert guidance, Ghar Aarogyam is a well-thoughtfully designed program that brings essential healthcare support together in one place. The program is built to help patients and caregivers feel informed, supported, and connected at every stage of care through a mobile app, bridging the gap between knowing about health and actually living healthily.
          </p>
        </div>
      </section>

      {/* Content blocks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 space-y-10">

          {/* The Problem We Solve */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#FF9800" }}>
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color: "#FF9800" }}>The Problem We Solve</h2>
              <p className="leading-relaxed text-sm" style={{ display: "block", width: "100%", color: "#0056b3" }}>
                Millions of patients in India receive a diagnosis but leave the hospital confused. They struggle to understand their condition, follow dietary guidelines, manage their medication schedule, or handle the emotional burden of a chronic illness. Family caregivers are equally lost. Ghar Aarogyam was built to solve exactly this — providing a comprehensive, personalised support system that walks with the patient every step of the way.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#BAEAF7" }}>
              <span className="material-symbols-outlined text-2xl" style={{ color: "#000" }}>rocket_launch</span>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color: "#FF9800" }}>Our Vision</h2>
              <p className="leading-relaxed text-sm" style={{ display: "block", width: "100%", color: "#0056b3" }}>
                We envision a future where no patient feels alone in their health journey. A future where every family in India has a trusted health companion — available 24/7, in their language, at their doorstep. Through technology, compassion, and relentless dedication, Ghar Aarogyam is building that future today.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-16" style={{ backgroundColor: "#ECEFF1" }}>
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl font-black text-center mb-10" style={{ color: "#FF9800" }}>Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "handshake", bg: "#7CC043", title: "Compassion", desc: "We treat every patient and caregiver with genuine care and empathy, always." },
              { icon: "verified", bg: "#FF9800", title: "Integrity", desc: "We provide honest, evidence-based guidance. We never overpromise." },
              { icon: "diversity_3", bg: "#BAEAF7", title: "Inclusivity", desc: "Our care is for everyone — across languages, geographies, and income levels.", dark: true },
            ].map((v) => (
              <div key={v.title} className="text-center p-7">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: v.bg }}>
                  <span className="material-symbols-outlined" style={{ color: v.dark ? "#000" : "#fff" }}>{v.icon}</span>
                </div>
                <h3 className="font-black text-black mb-2 text-base">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#0056b3" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
