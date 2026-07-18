export default function Mission() {
  return (
    <main className="pt-[90px]">

      {/* Hero & Mission Statement */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ECEFF1 100%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <div className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#FF9800" }}>
            Our Mission
          </div>
          {/* <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#FF9800" }}>Our Mission</h1> */}
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#7CC043" }}>Your Health, Our Priority</h2>
          <p className="text-lg leading-relaxed mb-10 font-medium" style={{ color: "#0056b3" }}>
            To improve patient well-being by providing access to healthcare support services that complement the care prescribed by treating healthcare professionals.
          </p>

          <p className="leading-relaxed text-base max-w-3xl mx-auto" style={{ color: "#0056b3" }}>
            From emergency assistance to expert guidance, Ghar Aarogyam is a well-thoughtfully designed program that brings essential healthcare support together in one place. The program is built to help patients and caregivers feel informed, supported, and connected at every stage of care through a mobile app, bridging the gap between knowing about health and actually living healthily.
          </p>
        </div>
      </section>



    </main>
  );
}
