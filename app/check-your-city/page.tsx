import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your City | Ghar Aarogyam",
  description: "Ghar Aarogyam Services will be rolled out in a phased manner to ensure seamless implementation and quality support.",
};

const phases = [
  {
    phase: "Phase 1",
    cities: ["Jabalpur", "Katni", "Rewa", "Satna"],
  },
  {
    phase: "Phase 2",
    cities: ["Chhatarpur", "Damoh", "Panna", "Sagar"],
  },
  {
    phase: "Phase 3",
    cities: ["Chhindwara", "Mandla", "Narsinghpur"],
  },
  {
    phase: "Phase 4",
    cities: ["Datia", "Gwalior", "Mandsaur", "Ratlam"],
  },
];

export default function CheckYourCity() {
  return (
    <main className="pt-[100px] min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white" style={{ backgroundColor: "#FF9800" }}>
            Check Your City…
          </div>
          {/* Title in GREEN */}
          <h1 className="text-3xl md:text-5xl font-black mb-4" style={{ color: "#7CC043" }}>
            Bringing Healthcare Support Closer to Families
          </h1>
          {/* Subtitle in BLUE */}
          <p className="text-base md:text-lg font-semibold max-w-3xl mx-auto leading-relaxed" style={{ color: "#2B56A0" }}>
            Ghar Aarogyam Services will be rolled out in a phased manner to ensure seamless implementation and quality support.
          </p>
        </div>
      </section>

      {/* Phased Cities Columns */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {phases.map((p) => (
              <div key={p.phase} className="flex flex-col">
                {/* Green Header */}
                <div className="py-2.5 px-4 bg-[#7CC043] text-black font-bold text-lg md:text-xl rounded-md mb-3">
                  {p.phase}
                </div>

                {/* Cities List */}
                <div className="space-y-2 px-1 text-black font-semibold text-base md:text-lg">
                  {p.cities.map((city) => (
                    <div key={city}>{city}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
