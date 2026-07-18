export default function FAQ() {
  const faqs = [
    {
      q: "What is Ghar Aarogyam?",
      a: "Ghar Aarogyam is a comprehensive AI-driven Patient Support Program designed to empower patients and caregivers with timely guidance, emotional support, and healthcare assistance from the comfort of their homes.",
    },
    {
      q: "Who is this program for?",
      a: "This program is for patients managing chronic conditions, their family caregivers, and anyone who wants structured support for their health journey without repeated hospital visits.",
    },
    {
      q: "Does this program replace my regular doctor?",
      a: "No. Ghar Aarogyam is a support and guidance program — not a replacement for your doctor. We work alongside your treating physician to help you follow your prescribed treatment plan more effectively.",
    },
    {
      q: "How do I join the program?",
      a: "Simply click the 'Join the Program' button on our website or download our mobile app. A dedicated health coach will contact you within 24 hours to get you started.",
    },
    {
      q: "What services are included?",
      a: "The program includes expert diet consultation (Sanjeevani), psychological counseling (Mitra), dedicated health coaching (Margdarshak), panic button emergency support (Suraksha), and smart medicine reminders (Smriti).",
    },
    {
      q: "Is my data safe and private?",
      a: "Absolutely. We follow strict data privacy regulations. Your health information is encrypted, stored securely, and never shared with third parties without your explicit consent.",
    },
    {
      q: "What areas do you currently serve?",
      a: "We are currently serving families across Madhya Pradesh, including Jabalpur, Rewa, Sagar, Gwalior, Ujjain, and Bhopal divisions. We are expanding rapidly — if your district is not listed, sign up and we'll notify you when we arrive.",
    },
    {
      q: "Is there a mobile app available?",
      a: "Yes! The Ghar Aarogyam app is available for download. It gives you access to all program features including reminders, one-tap emergency support, and direct communication with your health coach.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel your subscription at any time. There are no hidden lock-in periods. Please refer to our cancellation policy for details on refunds.",
    },
    // {
    //   q: "How do I contact support?",
    //   a: "You can reach our support team via email at info@gharaarogyam.in or call us at 1-800-AAROGYAM. You can also use the Contact Us page on our website.",
    // },
  ];

  return (
    <main className="pt-[100px] min-h-screen bg-[#F0F9FF]">
      {/* Hero */}
      <section className="py-16 text-center text-white" style={{ background: 'linear-gradient(135deg, #7CC043 0%, #BAEAF7 100%)' }}>
        <div className="max-w-3xl mx-auto px-5">
          <h1 className="text-[#0056b3] text-4xl md:text-5xl font-black mb-4">Everything you'd want to Know</h1>
          {/* <p className="text-white/85 text-lg">Clear, honest answers to your most common questions.</p> */}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group cursor-pointer">
                <summary className="flex items-center justify-between p-6 font-bold text-gray-800 text-base">
                  <span className="flex items-center gap-3 text-left">
                    <span className="w-7 h-7 rounded-full bg-[#FF9800] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="material-symbols-outlined text-[#7CC043] transition-transform group-open:rotate-180 flex-shrink-0 ml-4">expand_more</span>
                </summary>
                <div className="px-6 pb-6 pt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* <div className="mt-12 text-center p-8">
            <p className="text-gray-600 mb-4">Still have questions? We're happy to help.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF9800] hover:bg-[#e68900] text-white font-bold px-8 py-3 rounded-full transition-all shadow-md text-sm"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              Contact Us
            </a>
          </div> */}
        </div>
      </section>
    </main>
  );
}

