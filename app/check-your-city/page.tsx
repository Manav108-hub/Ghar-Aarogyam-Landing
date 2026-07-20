import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Check Your City | Ghar Aarogyam",
  description: "Ghar Aarogyam Services pahle aapke sheher mein aa rahi hain — phased rollout ke saath. Check karein ki aapka sheher kab covered ho raha hai.",
};

const phases = [
  {
    phase: "Phase 1",
    color: "#7CC043",
    bg: "#e8f5d9",
    cities: ["Jabalpur", "Katni", "Rewa", "Satna"],
    status: "Live Now",
    statusColor: "#7CC043",
  },
  {
    phase: "Phase 2",
    color: "#FF9800",
    bg: "#FFF3E0",
    cities: ["Chhatarpur", "Damoh", "Panna", "Sagar"],
    status: "Jald Aane Wala",
    statusColor: "#FF9800",
  },
  {
    phase: "Phase 3",
    color: "#03A9F4",
    bg: "#E1F5FE",
    cities: ["Chhindwara", "Mandla", "Narsinghpur"],
    status: "Aa Raha Hai",
    statusColor: "#03A9F4",
  },
  {
    phase: "Phase 4",
    color: "#9C27B0",
    bg: "#F3E5F5",
    cities: ["Datia", "Gwalior", "Mandsaur", "Ratlam"],
    status: "Aane Waala Hai",
    statusColor: "#9C27B0",
  },
];

export default function CheckYourCity() {
  return (
    <main className="pt-[100px] min-h-screen bg-[#F0F9FF]">
      {/* Hero */}
      <section
        className="py-16 text-center text-white"
        style={{ background: "linear-gradient(135deg, #7CC043 0%, #BAEAF7 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-5">
            APNA SHEHER CHECK KAREIN
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Bringing Healthcare Support Closer to Families
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.9)",
              display: "block",
              width: "100%",
            }}
          >
            Ghar Aarogyam Services ek phased manner mein roll out ki ja rahi hain — taaki seamless implementation aur quality support ensure ki ja sake.
          </p>
        </div>
      </section>

      {/* Phase Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">
              Rollout Phases
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Apna sheher neeche dhundh karein aur jaanein kab service aapke paas pahunchegi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="rounded-2xl bg-white border-2 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                style={{ borderColor: p.color }}
              >
                {/* Phase Header */}
                <div className="px-6 py-4" style={{ backgroundColor: p.color }}>
                  <div className="text-white font-black text-xl">{p.phase}</div>
                  <div className="inline-block mt-2 px-3 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded-full tracking-widest uppercase">
                    {p.status}
                  </div>
                </div>

                {/* Cities */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {p.cities.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{ backgroundColor: p.bg, color: p.color }}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
            <div className="text-3xl mb-4">🏙️</div>
            <h3 className="text-xl font-black text-gray-800 mb-2">
              Aapka Sheher List Mein Nahin Hai?
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
              Hum Madhya Pradesh ke aur bhi shehron mein pahunchne ki taiyari kar rahe hain. Hamse contact karein aur apna interest register karein — jab aapka sheher add ho, hum aapko sab pehle batayenge!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-white shadow-md transition-all hover:opacity-90"
              style={{ backgroundColor: "#FF9800" }}
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Hum Se Sampark Karein
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
