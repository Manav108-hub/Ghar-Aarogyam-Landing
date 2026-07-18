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
            <div className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#FF9800" }}>
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
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>why choose Ghar Aarogyam
              programme …</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Because your Health Story is unique</h2>
            <p className="mt-3 text-black/60 text-sm" style={{ display: "block", width: "100%" }}>We understand managing health can be overwhelming. We make it simpler.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: "speed", title: "Faster Response", desc: "Just one Click away Patient-centric support services" },
              { icon: "emergency", title: "Reduced Response Time", desc: "Critical in saving lives during emergencies [Panic Button]" },
              { icon: "support_agent", title: "One-on-One Guidance", desc: "Guidance from qualified healthcare professionals" },
              { icon: "psychology", title: "Smart AI solutions", desc: "For seamless healthcare delivery" },
              { icon: "all_inclusive", title: "Holistic Support", desc: "Works alongside nutrition, psychological, and medical advice." },
              { icon: "groups", title: "Family Assurance", desc: "Caregivers and loved ones are notified instantly." },
              { icon: "volunteer_activism", title: "Emotional Connection", desc: "Counsellors provide compassionate listening." },
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
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>WHAT WE OFFER</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>Our Unique Services</h2>
          </div>
          
          <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-6 items-stretch max-w-5xl mx-auto relative">
            {[
              { id: "Sanjeevani", type: "Expert Diet Consultation", icon: "local_dining", pos: "col-start-1 row-start-1", desc: "Tailored dietary advice crafted by specialists to suit your health goals and medical history, aiding faster recovery." },
              { id: "Mitra", type: "Psychological Counseling", icon: "psychology", pos: "col-start-3 row-start-1", desc: "Compassionate mental health support to help patients and caregivers navigate the emotional stress of managing health." },
              { id: "Suraksha", type: "Panic Button", icon: "emergency", pos: "col-start-2 row-start-2", desc: "One-tap emergency alert that instantly notifies your family and connects you to emergency services in critical moments.", isCenter: true },
              { id: "Margdarshak", type: "Health Coach", icon: "directions_walk", pos: "col-start-1 row-start-3", desc: "A dedicated health partner to guide you through your care journey, monitor progress, and ensure adherence." },
              { id: "Smriti", type: "Medicine Reminders", icon: "medication", pos: "col-start-3 row-start-3", desc: "Smart, personalized medication reminders so you never miss a dose and stay on track with your treatment plan." },
            ].map((svc) => (
              <details key={svc.id} className={`group ${svc.pos} ${svc.isCenter ? "bg-[#FF9800] text-white shadow-xl transform scale-110 z-10" : "bg-white border border-gray-200 shadow-sm text-black"} p-6 rounded-3xl transition-transform hover:-translate-y-1 cursor-pointer outline-none marker:content-none`}>
                <summary className="flex flex-col items-center text-center justify-center list-none outline-none [&::-webkit-details-marker]:hidden">
                  <span className={`material-symbols-outlined text-5xl mb-4 ${svc.isCenter ? "text-white" : "text-[#7CC043]"}`}>{svc.icon}</span>
                  <h3 className={`font-black text-xl mb-1 ${svc.isCenter ? "text-white" : "text-black"}`}>{svc.id}</h3>
                  <div className={`text-xs font-bold uppercase tracking-wider ${svc.isCenter ? "text-white/90" : "text-[#FF9800]"}`}>{svc.type}</div>
                  <span className="material-symbols-outlined mt-4 transition-transform group-open:rotate-180" style={{ color: svc.isCenter ? "rgba(255,255,255,0.7)" : "#BAEAF7" }}>expand_more</span>
                </summary>
                <div className={`pt-4 mt-4 border-t ${svc.isCenter ? "border-white/20" : "border-gray-100"}`}>
                  <p className={`text-sm leading-relaxed text-center ${svc.isCenter ? "text-white/90" : "text-black/70"}`}>{svc.desc}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-4">
             {[
              { id: "Suraksha", type: "Panic Button", icon: "emergency", desc: "One-tap emergency alert that instantly notifies your family and connects you to emergency services in critical moments.", isCenter: true },
              { id: "Sanjeevani", type: "Expert Diet Consultation", icon: "local_dining", desc: "Tailored dietary advice crafted by specialists to suit your health goals and medical history." },
              { id: "Mitra", type: "Psychological Counseling", icon: "psychology", desc: "Compassionate mental health support to help patients and caregivers navigate the emotional stress." },
              { id: "Margdarshak", type: "Health Coach", icon: "directions_walk", desc: "A dedicated health partner to guide you through your care journey." },
              { id: "Smriti", type: "Medicine Reminders", icon: "medication", desc: "Smart, personalized medication reminders so you never miss a dose." },
            ].map((svc) => (
              <details key={svc.id} className={`group ${svc.isCenter ? "bg-[#FF9800] text-white" : "bg-white text-black border border-gray-200"} p-5 rounded-2xl shadow-sm cursor-pointer outline-none marker:content-none`}>
                <summary className="flex items-center justify-between outline-none list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${svc.isCenter ? "bg-white/20" : "bg-[#f4f4f4]"}`}>
                      <span className={`material-symbols-outlined text-2xl ${svc.isCenter ? "text-white" : "text-[#7CC043]"}`}>{svc.icon}</span>
                    </div>
                    <div>
                      <h3 className={`font-black text-lg ${svc.isCenter ? "text-white" : "text-black"}`}>{svc.id}</h3>
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${svc.isCenter ? "text-white/80" : "text-[#FF9800]"}`}>{svc.type}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 flex-shrink-0 ml-4" style={{ color: svc.isCenter ? "rgba(255,255,255,0.7)" : "#BAEAF7" }}>expand_more</span>
                </summary>
                <div className={`mt-4 pt-4 border-t ${svc.isCenter ? "border-white/20" : "border-gray-100"}`}>
                  <p className={`text-xs leading-relaxed ${svc.isCenter ? "text-white/90" : "text-black/70"}`}>{svc.desc}</p>
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
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div className="text-7xl mb-4">🏠</div>
              <p className="text-xl font-bold text-black">Healthcare at home,<br />dignity always.</p>
            </div>
          </div>
          <div className="flex-1 w-full space-y-8">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white" style={{ backgroundColor: "#FF9800" }}>WHAT SETS US APART</div>
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#7CC043" }}>How Ghar Aarogyam<br />Stands Apart?</h2>
            <ul className="space-y-6">
              {[
                { icon: "thumb_up", title: "Feel supported and motivated by our Healthcare Experts" },
                { icon: "science", title: "Practices clinical backed modern science" },
                { icon: "account_tree", title: "Unified patient support service under one roof" },
                { icon: "security", title: "100% safe, Private and Secure" },
                { icon: "lock", title: "100% Maintain Confidentiality" },
                { icon: "timer_off", title: "No Queue. No waiting" },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#FF9800" }}>
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-black text-base">{item.title}</h3>
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
          <h2 className="text-3xl md:text-4xl font-black text-black">Real stories, Real Experiences … help people feel more confident </h2>
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
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>WHERE WE SERVE</div>
          <h2 className="text-3xl md:text-4xl font-black text-black">Now supporting families across<br />Madhya Pradesh</h2>
        </div>
        <div className="flex gap-6" style={{ display: "flex", width: "max-content", animation: "scroll 25s linear infinite reverse", maskImage: "linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0, black 120px, black calc(100% - 120px), transparent 100%)" }}>
          {[...cities, ...cities].map((c, i) => (
            <div key={i} className="w-[250px] flex-shrink-0 bg-white rounded-2xl p-5 border" style={{ borderColor: "#ECEFF1" }}>
              <h4 className="font-bold text-sm flex items-center gap-1 mb-3 text-black">
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
