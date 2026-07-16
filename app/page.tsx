import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const testimonials = [
    { text: "Ghar Aarogyam made it much easier for me to understand my medicines and stay on track with my treatment.", author: "Amit S.", age: 45, city: "Mumbai", initial: "A" },
    { text: "The app is simple to use, and I like having support for nutrition, counselling, and health guidance in one place.", author: "Priya R.", age: 38, city: "Delhi", initial: "P" },
    { text: "When I needed help quickly, the emergency support feature gave me peace of mind.", author: "Vikram M.", age: 62, city: "Pune", initial: "V" },
    { text: "It feels reassuring to know I can access trusted guidance whenever I need it.", author: "Sunita K.", age: 55, city: "Bangalore", initial: "S" },
    { text: "The nutritionists were so patient and helped me create a diet plan that perfectly suits my medical needs.", author: "Neha T.", age: 32, city: "Hyderabad", initial: "N" },
    { text: "I live away from my parents, but the Panic Button feature gives me absolute peace of mind regarding their safety.", author: "Rahul D.", age: 41, city: "Chennai", initial: "R" },
    { text: "The psychological counselling helped me deal with my post-surgery anxiety beautifully.", author: "Meena W.", age: 48, city: "Jaipur", initial: "M" },
    { text: "Explaining the prescriptions was a game-changer. I finally understand what I'm taking and why.", author: "Karan V.", age: 50, city: "Ahmedabad", initial: "K" },
    { text: "A completely hassle-free experience. The UI of the app is so intuitive even for older people.", author: "Jatin B.", age: 68, city: "Kolkata", initial: "J" },
    { text: "Having doctors, counsellors, and nutritionists on one platform saves so much time.", author: "Anjali P.", age: 29, city: "Chandigarh", initial: "A" },
    { text: "My doctor recommended this program, and it's been the best addition to my ongoing treatment.", author: "Rajiv S.", age: 54, city: "Surat", initial: "R" },
    { text: "Fast and reliable. Every time I reached out, the medical experts were ready to help.", author: "Kavita L.", age: 36, city: "Lucknow", initial: "K" },
    { text: "It's comforting to have professionals check up on you regularly. Highly recommend!", author: "Ramesh G.", age: 60, city: "Indore", initial: "R" },
    { text: "The 24/7 availability of medical guidance is unparalleled.", author: "Sneha M.", age: 42, city: "Bhopal", initial: "S" },
    { text: "I love the holistic approach—they care about your diet, your mind, and your body.", author: "Vikas C.", age: 35, city: "Patna", initial: "V" },
    { text: "They made sure I took all my medications on time. Truly a lifesaver.", author: "Sushma R.", age: 72, city: "Nagpur", initial: "S" },
    { text: "As a caregiver, this app takes so much pressure off my shoulders.", author: "Manish K.", age: 47, city: "Vadodara", initial: "M" },
    { text: "Amazing service! The diet plans provided have made a huge difference in my energy levels.", author: "Geeta H.", age: 30, city: "Ludhiana", initial: "G" },
    { text: "It's like having a hospital in your pocket. Extremely satisfied.", author: "Suresh P.", age: 58, city: "Coimbatore", initial: "S" },
    { text: "Ghar Aarogyam has brought peace and health into our home.", author: "Divya N.", age: 28, city: "Kochi", initial: "D" },
  ];

  return (
    <main className="pt-[110px]">
      {/* Top Bar (Social Media) */}
      <div className="fixed top-0 w-full z-[60] bg-surface-tint text-on-primary text-xs md:text-sm py-2 shadow-sm">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex items-center gap-4 font-medium opacity-90">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">call</span> 1-800-AAROGYAM</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <a href="mailto:info@gharaarogyam.in" className="hidden sm:flex items-center gap-1 hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-[16px]">mail</span> info@gharaarogyam.in</a>
          </div>
          <div className="flex gap-3 items-center opacity-90">
            <span className="hidden sm:inline font-medium mr-1">Follow Us:</span>
            <a href="#" className="hover:text-primary-fixed transition-colors bg-white/10 p-1.5 rounded-full flex items-center justify-center" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#" className="hover:text-primary-fixed transition-colors bg-white/10 p-1.5 rounded-full flex items-center justify-center" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="https://www.instagram.com/gharaarogyam?igsh=Z3diN3VlNThsZm01&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-fixed transition-colors bg-white/10 p-1.5 rounded-full flex items-center justify-center" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed z-50 bg-surface-container-low/80 backdrop-blur-md w-full top-[36px] md:top-[38px] border-b border-surface-variant">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="Ghar Aarogyam Logo" width={40} height={40} className="object-contain" />
            <span className="font-headline-md text-headline-md text-primary">Ghar Aarogyam</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md" href="#">Home</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#mission">Our Mission</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#services">Services</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#why-us">Why Us</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#faq">FAQ</a>
          </div>
          <a href="#download" className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2 rounded-full transition-all shadow-sm">
            Get the App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-[40px]">
        <div className="absolute inset-0 z-0 bg-surface-container-low"></div>
        <div className="absolute inset-0 z-10 hero-gradient"></div>
        <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-6 border border-secondary-fixed shadow-sm">
              SAHI SALAH AROGYA KI RAHA
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              Welcome to <br />
              <span className="text-primary">Ghar Aarogyam</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Ghar Aarogyam is a comprehensive unique AI driven Patient Support Program designed to empower patients and caregivers with timely guidance, emotional support, and healthcare assistance from the comfort of their homes.
            </p>
            <div className="flex gap-4">
              <a href="#download" className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-8 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download App
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative mt-10 md:mt-0">
            <div className="relative w-full max-w-lg rounded-[32px] overflow-hidden soft-shadow border-4 border-white shadow-xl flex">
              <Image src="/hero.png" alt="Ghar Aarogyam Health Support" width={1000} height={800} className="w-full h-auto object-contain" priority />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="material-symbols-outlined text-secondary text-4xl">favorite</span>
            </div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="material-symbols-outlined text-tertiary text-2xl">verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto" id="mission">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Mission</h2>
          <p className="font-body-lg text-body-lg text-primary font-bold mb-4">Your Health, Our Priority</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-6">
            To improve patient well-being by providing access to healthcare support services that complement the care prescribed by treating healthcare professionals.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mx-auto bg-surface-container-lowest p-6 rounded-xl border border-surface-variant soft-shadow">
            From emergency assistance to expert guidance, Ghar Aarogyam is a well-thoughtfully designed program that brings essential healthcare support together in one place. The program is built to help patients and caregivers feel informed, supported, and connected at every stage of care through a mobile app, bridging the gap between knowing about health and actually living healthily.
          </p>
        </div>
      </section>

      {/* Unique Services */}
      <section className="py-xl bg-surface-container-low" id="services">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Our Unique Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Empowering people to take ownership of their health...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter justify-center">

            <div className="bg-surface-container-lowest rounded-xl p-8 soft-shadow border border-surface-variant hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full bg-error-container text-on-error-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">emergency</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px]">Stay Safe with Panic Button</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">In situations where immediate assistance is required, patients can use the emergency Panic Button feature to alert designated contacts and receive prompt support as per program protocols.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 soft-shadow border border-surface-variant hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">nutrition</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px]">Nutritionist Guidance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Our qualified nutrition experts provide general dietary and lifestyle guidance to help patients maintain a balanced and healthy routine that supports their overall wellness.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 soft-shadow border border-surface-variant hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px]">Clinical Psychological Counselling</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Living with a medical condition can be emotionally challenging. Our counselling support service offers professional psychological guidance to help patients and caregivers cope with stress, anxiety, and emotional concerns.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 soft-shadow border border-surface-variant hover:-translate-y-1 transition-transform lg:col-span-1 lg:col-start-1">
              <div className="w-14 h-14 rounded-full bg-tertiary-fixed/40 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">stethoscope</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px]">Talk to Medical Experts</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Patients can access general educational guidance from qualified medical experts regarding disease awareness, treatment adherence, and healthy lifestyle practices.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 soft-shadow border border-surface-variant hover:-translate-y-1 transition-transform lg:col-span-2">
              <div className="w-14 h-14 rounded-full bg-surface-tint/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-surface-tint text-3xl">prescriptions</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px]">Know Your Prescription Service</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">This service helps patients better understand their prescribed medications, including dosage schedules, administration instructions, and the importance of adherence. The service is intended to support informed medication use and does not replace consultation with the treating physician.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & Stands Apart */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto" id="why-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Why Choose Ghar Aarogyam?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Because your Health Story is Unique</p>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Easily Accessible</strong> - Just one Click away Patient-centric support services</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Convenience</strong> – Access expert from the comfort of your home</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Reduced Response Time</strong> - Critical in saving lives during emergencies [Panic Button]</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Trust & Confidence</strong> – Direct Integration builds stronger Trust</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>One-on-One Guidance</strong> - Guidance from qualified healthcare professionals</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Peace of Mind</strong> – Continuous support taking pressure off caregivers</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Technology Driven</strong> – Smart IT AI solutions for seamless healthcare delivery</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Clinically Backed Guidelines</strong> - Improved treatment awareness and adherence</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Holistic Approach</strong> - Works alongside nutrition, psychological, and medical advice.</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Family Assurance</strong> - Caregivers and loved ones are notified instantly.</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Emotional Connection</strong> - Counsellors provide compassionate listening.</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Personalized Solution</strong> - Health plans are adapted to your lifestyle.</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Direct Access</strong> - Instantly connect with the right expert.</span></li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> <span><strong>Data Privacy</strong> - All personal health information is strictly confidential.</span></li>
            </ul>
          </div>

          <div>
            <div className="bg-surface-container p-8 rounded-xl border border-surface-variant soft-shadow h-full">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Why Ghar Aarogyam stands apart…</h2>
              <ul className="space-y-5 font-body-md text-body-md text-on-surface-variant">
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>You feel supported not just as a patient, but as a person</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>You receive the right guidance at the right time</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>Unified access to essential patient support services.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>Designed for convenience, clarity, and confidence.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>Enables timely support across emergency and routine care.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>Encourages better understanding of treatment and prescriptions.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>Built to deliver a premium, user-first healthcare experience.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-tertiary">star</span> <span>No queue. No waiting for taking the advice from the medical expert</span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* App Steps Section */}
      <section className="py-xl bg-surface-variant relative overflow-hidden" id="download">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-4">Join the Program Now…</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Explore a better way to access patient support through a single intelligent platform. Download the app and use healthcare support that is simple, friendly, and made for real life.
            </p>

            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">📱 Simple 1-2-3 Steps</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-label-md text-label-md font-bold mb-1">Download the App</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Get started by installing the Ghar Aarogyam mobile app.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-label-md text-label-md font-bold mb-1">Register Yourself</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Create your profile and connect with healthcare experts.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-label-md text-label-md font-bold mb-1">Access Services</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Use the app to access emergency support, expert guidance, and personalized care.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-on-surface text-surface font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-on-surface/90 transition-colors">
                <span className="material-symbols-outlined text-2xl">apps</span>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-surface/80">Download on the</div>
                  <div className="font-semibold leading-tight">App Store</div>
                </div>
              </button>
              <button className="bg-on-surface text-surface font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-on-surface/90 transition-colors">
                <span className="material-symbols-outlined text-2xl">shop</span>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-surface/80">GET IT ON</div>
                  <div className="font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Visual representation of app since we don't have the specific image url provided by user, just placeholder style */}
            <div className="w-full max-w-sm h-[600px] bg-[#0f1c14] rounded-[40px] border-[12px] border-[#0f1c14] overflow-hidden soft-shadow relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0f1c14] rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-surface-container flex flex-col items-center pt-20 px-6 text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">home_health</span>
                <h3 className="font-headline-md text-primary mb-8">Ghar Aarogyam</h3>
                <div className="w-full bg-surface-container-lowest p-4 rounded-xl mb-4 text-left shadow-sm">
                  <div className="h-4 bg-surface-variant rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-surface-variant rounded w-3/4"></div>
                </div>
                <div className="w-full bg-surface-container-lowest p-4 rounded-xl mb-4 text-left shadow-sm flex gap-4">
                  <div className="w-12 h-12 rounded bg-secondary-container"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-surface-variant rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-surface-variant rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xl bg-surface-container-lowest overflow-hidden">
        <div className="text-center mb-12 px-margin-mobile">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">What Our Users Say</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Real experiences help people feel more confident about choosing the right support. Here are a few words from patients who value the simple, caring support they received.
          </p>
        </div>

        <div className="marquee-container py-4">
          <div className="marquee-content gap-6 px-3">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={idx} className="w-[350px] shrink-0 bg-surface-container rounded-xl p-6 border border-surface-variant">
                <p className="font-body-md text-body-md text-on-surface mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">{t.author}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{t.age}, {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto" id="faq">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q1. How does the Emergency Panic Button work?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              Once enrolled, you will receive access to our digital platform/device feature. In any critical health situation, pressing the Panic Button instantly alerts will be sent through message to your near dear ones / caregivers first and secondly to the family Drs (If provided by the patient) and thirdly it will be sent to 108 ambulance service.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q2. What is the "Know Your Prescription" service?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              It is a safety-first service where our clinical team helps you or your family members completely understand your prescribed medicines. We explain the correct dosages, specific timings (e.g., before or after meals), potential side effects, and how to avoid accidental medicine mismatches.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q3. Are the psychological counselling and nutrition services included?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              Yes! Holistic recovery requires mental and nutritional well-being. Our program connects you with certified clinical psychologists to manage illness-related anxiety, and professional nutritionists to create personalized recovery diet plans.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q4. Does this program replace my regular doctor?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              No, Ghar Aarogyam does not replace your primary treating doctor. Instead, we work alongside your doctor's treatment plan to ensure you follow it accurately, manage your daily health, and have access to expert advice between your hospital visits.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q5. Is Ghar Aarogyam program free for me?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              No. Ghar Aarogyam program is economical subscribed program. Keeping in mind to reduce the high medical budget.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q6. The advice / guidance provided by the expert is kept confidential for me?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              Yes. All sessions — especially counselling — are completely confidential.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q7. Can my family member also be enrolled in the Ghar Aarogyam program?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              Yes, the program is designed for your family members and their day-to-day medical queries.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q8. How often can I use the services?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              As per your subscription plan and their validity.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q9. I’m Healthy, still I can enrol and subscribe the program?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              Absolutely Yes, the Program is preventive in nature. The healthier you are now, the less you'll need to manage later. Prevention is the best medicine. You can gift the program to your near-dear-ones also.
            </div>
          </details>

          <details className="bg-surface-container rounded-xl border border-surface-variant group">
            <summary className="font-label-md text-label-md p-6 cursor-pointer flex justify-between items-center text-[16px]">
              Q10. How do I join?
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
              You can join by downloading the app and completing the simple registration process.
            </div>
          </details>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-surface-container-highest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <h4 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase">Disclaimer</h4>
          <div className="font-body-sm text-body-sm text-on-surface-variant opacity-80 text-justify space-y-4">
            <p>The information, educational materials, communications, and support content provided through this Patient Support Program ("Ghar Aarogyam") are intended solely for patient education, disease awareness, treatment adherence support, and general health information purposes.</p>
            <p>This material is not intended to promote, prescribe, recommend, or replace professional medical advice, diagnosis, or treatment. Patients should always consult their treating physician or qualified healthcare professional regarding any medical condition, treatment decisions, medication use, or healthcare concerns. This material is not intended to promote the use of any prescription medicine in a manner inconsistent with its approved prescribing information or applicable regulatory requirements.</p>
            <p>References to products, therapies, or treatment approaches, if any, should be interpreted in the context of approved local labelling and relevant clinical guidance. The content presented herein is based on information available at the time of publication and may be subject to change as scientific knowledge, clinical guidelines, and regulatory requirements evolve. While every effort has been made to ensure the accuracy and reliability of the information, no warranty or representation is made regarding its completeness or accuracy.</p>
            <p>The organization, its affiliates, employees, and partners shall not be liable for any direct or indirect loss, damage, or consequences arising from reliance on the information contained in this material. Participation in this Ghar Aarogyam program is voluntary and does not influence the prescribing decisions of healthcare professionals. Any references to products, therapies, treatment options, or disease management approaches are provided for educational purposes only and should not be interpreted as medical advice or promotional claims. Enrolment / Registration in the program is voluntary and does not constitute an inducement to prescribe, recommend, purchase, or continue any medication.</p>
            <p>By accessing or using the materials and services provided through this Ghar Aarogyam Program, participants acknowledge and agree to the terms of this disclaimer.</p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      {/* Contact Us Section */}
      <section className="py-xl bg-surface relative" id="contact">
        <div className="absolute inset-0 bg-primary/5 clip-path-slant z-0"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Get in Touch</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Have questions about our patient support program? Send us a message and our team will get back to you shortly.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-on-surface">Email Us</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">info@gharaarogyam.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-on-surface">Call Us</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">1-800-AAROGYAM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface rounded-[32px] p-2 soft-shadow border border-surface-variant">
               <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-inverse-surface mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-2">
            <span className="font-headline-md text-headline-md text-inverse-primary block mb-4">Ghar Aarogyam</span>
            <p className="font-body-sm text-body-sm text-inverse-on-surface max-w-sm mb-6">
              Tailored solutions, Compassionate support, technology-driven wellness.
            </p>
            <p className="font-body-sm text-body-sm text-inverse-on-surface opacity-70 mb-6">
              © [Sewarth Healthcare Pvt Ltd]. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a className="text-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="text-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">forum</span></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-label-md text-label-md text-inverse-on-surface mb-4">Company</h4>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li><a className="text-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#mission">About Us</a></li>
              <li><a className="text-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#services">Our Services</a></li>
              <li><a className="text-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#faq">FAQs</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-label-md text-label-md text-inverse-on-surface mb-4">Legal & SEO Sitemap</h4>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li><a className="text-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">Privacy Policy</a></li>
              <li><a className="text-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">Terms of Service</a></li>
              <li><a className="text-surface-variant hover:underline hover:text-primary transition-all duration-300" href="#">XML Sitemap</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
