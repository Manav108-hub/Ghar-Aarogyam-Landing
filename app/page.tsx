"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeScenario, setActiveScenario] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = ["/carousel_1.png", "/carousel_2.png", "/carousel_3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const testimonials = [
    { initials: "SD", name: "Sunita Devi, 58", city: "Sagar", color: "#7CC043", quote: "Now I know exactly when to take each tablet. My son used to worry, now he doesn't have to." },
    { initials: "RP", name: "Ramesh Patel, 64", city: "Gwalior", color: "#FF9800", quote: "I pressed the Panic Button and within minutes my daughter and the ambulance were both informed." },
    { initials: "KS", name: "Kavita Sharma, 45", city: "Jabalpur", color: "#BAEAF7", quote: "Diet, doctor and counsellor — all in one app. I don't have to explain my history again and again." },
    { initials: "AT", name: "Anil Tiwari, 70", city: "Rewa", color: "#7CC043", quote: "After my wife passed, the counsellor sessions gave me someone to talk to on the hard days." },
    { initials: "PM", name: "Priya Mishra, 38", city: "Satna", color: "#FF9800", quote: "The diet plan was exactly what my mother needed after her surgery. Simple, practical, effective." },
  ];

  return (
    <main className="pt-[90px]">

      {/* ── 1. HERO ── */}
      <section className="pt-10 md:pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 pb-12">
          {/* Left Text */}
          <div className="w-full md:flex-1 space-y-12">
            <div>
              <p className="text-xl md:text-2xl text-black">Welcome to <span className="text-[#7CC043] font-bold">Ghar </span><span className="text-[#FF9800] font-bold">Aarogyam</span> programme</p>
              <h2 className="text-2xl md:text-3xl font-bold text-black mt-2">...Empowering people to take ownership of their health.</h2>
            </div>

            <p className="text-lg md:text-xl text-black/90 leading-relaxed text-center md:text-left">
              Ghar Aarogyam by Sewarth™ is a comprehensive unique AI driven Patient Support Program designed to empower patients and caregivers with timely guidance, emotional support, and healthcare assistance from the comfort of their homes.
            </p>

            <p className="text-3xl md:text-4xl font-bold text-center md:text-left" style={{ color: "#2B56A0", fontFamily: "var(--font-hindi), serif" }}>
              सही सलाह, आरोग्य की राह
            </p>
          </div>

          {/* Right Carousel */}
          <div className="w-full md:flex-1 flex flex-col items-center md:items-end">
            <div className="w-full relative overflow-hidden rounded-2xl shadow-xl" style={{ aspectRatio: '4/3' }}>
              {carouselImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] md:text-xs text-black/40 text-center w-full">
              "Only For Representational Purposes"
            </p>
          </div>
        </div>

        {/* Green Bar below */}
        <div className="w-full py-6 px-5" style={{ backgroundColor: "#7CC043" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-4 gap-x-4 text-white font-semibold text-base md:text-lg">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="material-symbols-outlined text-3xl md:text-4xl" style={{ color: "#FF9800" }}>workspace_premium</span>
              <span className="font-bold text-lg md:text-xl" style={{ color: "#2B56A0" }}>Experience of more than 10 + years</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="material-symbols-outlined text-3xl md:text-4xl" style={{ color: "#FF9800" }}>groups</span>
              <span className="font-bold text-center md:text-right" style={{ color: "#2B56A0" }}>Provided Assitance To more than <strong>1500 housholds</strong></span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 md:ml-8 lg:ml-16">
              <span className="material-symbols-outlined text-3xl md:text-4xl" style={{ color: "#FF9800" }}>self_improvement</span>
              <span className="font-bold text-lg md:text-xl text-center md:text-left" style={{ color: "#2B56A0" }}><strong>Peace of Mind</strong> - <strong>100%</strong> among family members</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 md:mr-8 lg:mr-16">
              <span className="material-symbols-outlined text-3xl md:text-4xl" style={{ color: "#FF9800" }}>verified</span>
              <span className="font-bold text-center md:text-right" style={{ color: "#2B56A0" }}><strong>Trust</strong> Factor - Uncompromised</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE US — bg: white ── */}
      <section className="py-10 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>Why us…</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Kyunki Aapki Health Story Unique Hai</h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between divide-y md:divide-y-0 md:divide-x divide-black pt-4">
            {[
              { icon: "speed", text: "Faster Response Time with user friendly Interface" },
              { icon: "support_agent", text: "One-to-One Guidance from Healthcare experts" },
              { icon: "favorite", text: "Your Health Companion with you always" },
              { icon: "notifications_active", text: "Caregivers and Loved ones are notified Instantly" },
              { icon: "touch_app", text: "One Click for Health, Nutrition and clinical wellness / guidance" },
              { icon: "security", text: "Safe, Private & Confidential" },
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center px-3 py-6 md:py-0">
                <span className="material-symbols-outlined text-[40px] mb-4 text-black">
                  {item.icon}
                </span>
                <p className="text-sm md:text-base italic font-bold text-[#0284c7] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. UNIQUE SERVICES — bg: #ECEFF1 ── */}
      <section className="py-10" style={{ backgroundColor: "#ECEFF1" }} id="services">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>WHAT MAKES US DIFFERENT...</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Making Healthcare Smple, Understandable And Accessible For Every Family					</h2>
            {/* <p className="mt-3 text-black/60 text-sm max-w-2xl mx-auto">Healthcare ko simple, understandable aur accessible banana — har family ke liye.</p> */}
          </div>

          {/* Desktop grid — 6 services */}
          <div className="mt-16 flex flex-col md:flex-row gap-4">
            {[
              { img: "/service_1.png", tag: "Saral", title: "Know your Prescription Service" },
              { img: "/service_2.png", tag: "Sarthi", title: "Healthcare Expert Service" },
              { img: "/Nutrition.jpeg", tag: "Urja", title: "Nutrition Counselling Service" },
              { img: "/carousel_2.png", tag: "Umang", title: "Clinical Counselling Service" },
              { img: "/carousel_3.png", tag: "Smriti", title: "Voice Medicine Reminder Service" },
              { img: "/carousel_1.png", tag: "Sakha", title: "Panic Button - Critical Incidence Response Service" },
            ].map((svc, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                {/* Image Box */}
                <div className="w-full aspect-square md:aspect-auto md:h-48 relative border-2 border-black flex items-center justify-center bg-white">
                  {svc.img.startsWith("http") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={svc.img} alt={svc.tag} className="w-full h-full object-cover p-2" />
                  ) : (
                    <Image src={svc.img} alt={svc.tag} fill className="object-cover p-2" />
                  )}
                </div>
                {/* Pill */}
                <div className="px-8 py-2 rounded-xl text-center text-black font-bold text-base mt-8 mb-6 shadow-sm" style={{ backgroundColor: "#98d65c" }}>
                  {svc.tag}
                </div>
                {/* Title */}
                <p className="text-[#0284c7] font-bold text-center text-base md:text-lg leading-snug px-3 pb-12 md:pb-0 h-auto md:h-28">
                  {svc.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 4. SCENARIOS — bg: #BAEAF7 ── */}
      <section className="py-20" style={{ backgroundColor: "#BAEAF7" }}>
        <div className="flex items-center justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-center text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>My Story…</div>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="w-full border-2 border-black bg-white rounded-xl overflow-hidden flex flex-col shadow-lg">

            {/* Tabs Header */}
            <div className="flex items-center justify-center gap-4 p-5 border-b-2 border-black bg-gray-50">
              {Array.from({ length: 2 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveScenario(num)}
                  className={`inline-flex items-center gap-1 font-bold px-8 py-2.5 rounded-full transition-all shadow-md text-sm md:text-base ${activeScenario === num
                    ? "bg-[#FF9800] hover:bg-[#e68900] text-white"
                    : "bg-white border-2 border-[#FF9800] text-[#FF9800] hover:bg-orange-50"
                    }`}
                >
                  Scenario {num}
                </button>
              ))}
            </div>

            {/* Scrollable Story Board */}
            <div className="w-full h-[600px] overflow-y-auto p-4 md:p-10 relative bg-gray-50 flex flex-col items-center">

              {/* Scenario storyboard image */}
              <div className="w-full max-w-3xl mx-auto pb-10">
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image
                    src={`/scenario-${activeScenario}.jpeg`}
                    alt={`Scenario ${activeScenario} storyboard`}
                    width={896}
                    height={504}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ── 5. TESTIMONIALS (scrolling) — bg: white ── */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-20 text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>FAMILIES SPEAK</div>
          <h2 className="text-3xl md:text-4xl font-black"><span className="text-[#7CC043]">Real Stories, Real Experiences - Help People Feel More Confident</span></h2>
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


      {/* ── 7. GET IN TOUCH inline — bg: #ECEFF1 ── */}
      {false && (
        <section className="py-20" style={{ backgroundColor: "#ECEFF1" }} id="contact">
          <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-12 items-center">

            {/* Left: Text */}
            <div className="w-full lg:w-5/12 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white" style={{ backgroundColor: "#FF9800" }}>CONTACT US</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] leading-tight">
                Let's start your <br />
                <span style={{ color: "#7CC043" }}>wellness journey</span> together
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="mailto:info@gharaarogyam.in"
                    className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-full text-sm shadow-md transition-all hover:opacity-90"
                    style={{ backgroundColor: "#FF9800" }}
                  >
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                    Send via Email
                  </a>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-full text-sm shadow-md transition-all hover:opacity-90"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
