import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="nav">
          <div className="brand">
            <Image src="/logo.jpeg" alt="Ghar Aarogyam logo" width={38} height={38} style={{ objectFit: 'contain' }} />
            Ghar Aarogyam
          </div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Plans</a>
            <a href="#locations">Locations</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#download" className="btn btn-primary nav-cta" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Download App
          </a>
        </div>
      </header>

      <section className="hero" id="download">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">🏠 AI-Driven Patient Support Program</span>
            <h1>
              Doctors, nutritionists &amp; counsellors — <span className="accent">right from home.</span>
            </h1>
            <span className="hero-tagline-hi">सही सलाह – आरोग्य की राह</span>
            <p className="lead">
              Ghar Aarogyam connects your family to medical guidance, emergency help and prescription support — all from one simple app. No queues, no long waits.
            </p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-primary">
                ⬇ Download for Android<small>Free to install</small>
              </a>
              <a href="#" className="btn btn-outline">
                🍎 Download for iOS<small>Free to install</small>
              </a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item"><span className="dot"></span>Trusted across 15+ MP districts</div>
              <div className="hero-trust-item"><span className="dot"></span>Sessions kept 100% confidential</div>
              <div className="hero-trust-item"><span className="dot"></span>Panic Button emergency alerts</div>
            </div>
          </div>
          <div className="phone-stage">
            <div className="phone">
              <div className="phone-notch"></div>
              <div style={{ width: '100%', aspectRatio: '9/19', background: '#2E9B52', borderRadius: '26px' }}></div>
            </div>
            <div className="float-card float-1">
              <div className="ic">🩺</div> Consult Now
            </div>
            <div className="float-card float-2">
              <div className="ic">💊</div> Get Meds
            </div>
            <div className="pulse-ring"></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat">
            <div className="ic">👥</div>
            <div className="num">50k+</div>
            <div className="lbl">Families Helped</div>
          </div>
          <div className="stat">
            <div className="ic">👨‍⚕️</div>
            <div className="num">200+</div>
            <div className="lbl">Top Doctors</div>
          </div>
          <div className="stat">
            <div className="ic">⭐</div>
            <div className="num">4.8/5</div>
            <div className="lbl">App Rating</div>
          </div>
          <div className="stat">
            <div className="ic">🚑</div>
            <div className="num">24/7</div>
            <div className="lbl">Support Active</div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <h2>Who is this for?</h2>
            <p>Comprehensive care solutions for every member of your family, tailored to their unique health needs.</p>
          </div>
          <div className="usecase-grid">
            <div className="usecase-card">
              <div className="usecase-photo">
                <div style={{width: '100%', aspectRatio: '1/0.92', background: '#e5e5e5'}}></div>
                <div className="usecase-badge" style={{background: '#2E9B52'}}>👴</div>
              </div>
              <h3>Elderly Care</h3>
              <p>Regular checkups and chronic disease management from home.</p>
              <span className="usecase-tag" style={{background: 'var(--green-soft)', color: 'var(--green-dark)'}}>Chronic Care</span>
            </div>
            <div className="usecase-card">
              <div className="usecase-photo">
                <div style={{width: '100%', aspectRatio: '1/0.92', background: '#e5e5e5'}}></div>
                <div className="usecase-badge" style={{background: '#F2841D'}}>👶</div>
              </div>
              <h3>Pediatric Consults</h3>
              <p>Quick access to pediatricians for sudden fevers or child care advice.</p>
              <span className="usecase-tag" style={{background: 'var(--orange-soft)', color: 'var(--orange-dark)'}}>Child Health</span>
            </div>
            <div className="usecase-card">
              <div className="usecase-photo">
                <div style={{width: '100%', aspectRatio: '1/0.92', background: '#e5e5e5'}}></div>
                <div className="usecase-badge" style={{background: '#1E63A8'}}>🧘‍♀️</div>
              </div>
              <h3>Women's Health</h3>
              <p>Confidential consultations for gynecology and nutrition.</p>
              <span className="usecase-tag" style={{background: 'var(--blue-soft)', color: 'var(--blue-dark)'}}>Wellness</span>
            </div>
            <div className="usecase-card">
              <div className="usecase-card" style={{border: 'none', paddingBottom: 0}}>
                <div className="usecase-photo">
                  <div style={{width: '100%', aspectRatio: '1/0.92', background: '#e5e5e5'}}></div>
                  <div className="usecase-badge" style={{background: '#D66E0C'}}>🧠</div>
                </div>
                <h3>Mental Health</h3>
                <p>Speak to therapists and counselors in a safe, private space.</p>
                <span className="usecase-tag" style={{background: '#FDECD8', color: '#D66E0C'}}>Counseling</span>
              </div>
            </div>
          </div>
          
          <div className="diff-bar">
            <div className="diff-title">
              <div className="bulb">💡</div> The Ghar Aarogyam Difference
            </div>
            <div className="diff-items">
              <div className="diff-item"><div className="di-ic">✅</div> Verified Doctors</div>
              <div className="diff-item"><div className="di-ic">🔒</div> 100% Private</div>
              <div className="diff-item"><div className="di-ic">⚡</div> Instant Connect</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="steps">
        <div className="wrap">
           <div className="section-head">
            <h2>Our Core Services</h2>
            <p>Everything you need to manage your health from the comfort of your home.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-ic ic-green">🩺</div>
              <h3>Video Consultations</h3>
              <p>Connect with specialists via high-quality video calls.</p>
            </div>
            <div className="service-card">
              <div className="service-ic ic-orange">💊</div>
              <h3>Medicine Delivery</h3>
              <p>Get prescriptions delivered directly to your doorstep.</p>
            </div>
            <div className="service-card">
              <div className="service-ic ic-blue">🧪</div>
              <h3>Lab Tests at Home</h3>
              <p>Book home sample collection for diagnostic tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>How it works</h2>
            <p>Getting started is easy and takes just a few minutes.</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Download & Register</h3>
              <p>Install the app and create profiles for your family members.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Choose a Service</h3>
              <p>Select doctor consultation, lab tests, or medicine delivery.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Get Care</h3>
              <p>Connect with a doctor instantly or schedule for later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="steps">
        <div className="wrap">
          <div className="section-head">
            <h2>Inside the App</h2>
            <p>A simple, intuitive interface designed for everyone.</p>
          </div>
          <div className="preview-scroll">
            <div className="preview-card">
              <div className="preview-frame" style={{aspectRatio: '9/19', background: '#333', borderRadius: '21px'}}></div>
              <h4>Home Screen</h4>
              <p>Quick access to all services</p>
            </div>
            <div className="preview-card">
              <div className="preview-frame" style={{aspectRatio: '9/19', background: '#333', borderRadius: '21px'}}></div>
              <h4>Doctor Profiles</h4>
              <p>View ratings and specialties</p>
            </div>
            <div className="preview-card">
              <div className="preview-frame" style={{aspectRatio: '9/19', background: '#333', borderRadius: '21px'}}></div>
              <h4>Health Records</h4>
              <p>Keep track of prescriptions</p>
            </div>
            <div className="preview-card">
              <div className="preview-frame" style={{aspectRatio: '9/19', background: '#333', borderRadius: '21px'}}></div>
              <h4>SOS Button</h4>
              <p>One tap for emergencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Why Choose Ghar Aarogyam?</h2>
            <p>We bring healthcare to you, making it accessible, affordable, and high quality.</p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-ic">🗣️</div>
              <div>
                <h4>Local Languages</h4>
                <p>Consult with doctors who speak your language.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-ic">⏱️</div>
              <div>
                <h4>Zero Wait Time</h4>
                <p>No more sitting in crowded clinic waiting rooms.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-ic">💰</div>
              <div>
                <h4>Affordable Care</h4>
                <p>Quality consultations starting at very low prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <h2>Simple, Transparent Plans</h2>
            <p>Choose the plan that fits your family's healthcare needs.</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="tag">Basic</div>
              <div className="amount">Free</div>
              <div className="validity">Forever</div>
              <ul>
                <li>Access to app directory</li>
                <li>Health tips & articles</li>
                <li>Pay per consultation</li>
              </ul>
              <button className="btn btn-outline" style={{width: '100%', marginTop: 'auto'}}>Get Started</button>
            </div>
            <div className="price-card pop">
              <div className="badge-pop">Most Popular</div>
              <div className="tag">Family Plus</div>
              <div className="amount">₹499<span>/mo</span></div>
              <div className="validity">Billed monthly</div>
              <div className="save">Save 20% on tests</div>
              <ul>
                <li>Up to 4 family members</li>
                <li>2 free consults/month</li>
                <li>Priority support</li>
                <li>Discounted medicines</li>
              </ul>
              <button className="btn btn-primary" style={{width: '100%', marginTop: 'auto'}}>Subscribe Now</button>
            </div>
            <div className="price-card">
              <div className="tag">Premium</div>
              <div className="amount">₹999<span>/mo</span></div>
              <div className="validity">Billed monthly</div>
              <div className="save">Save 30% on tests</div>
              <ul>
                <li>Unlimited family members</li>
                <li>5 free consults/month</li>
                <li>Dedicated health coach</li>
                <li>Free home sample pickup</li>
              </ul>
              <button className="btn btn-outline" style={{width: '100%', marginTop: 'auto'}}>Subscribe Now</button>
            </div>
            <div className="price-card">
              <div className="tag">Elderly Care</div>
              <div className="amount">₹799<span>/mo</span></div>
              <div className="validity">Billed monthly</div>
              <ul>
                <li>Weekly check-in calls</li>
                <li>Chronic condition tracking</li>
                <li>Medicine reminders</li>
                <li>Specialist access</li>
              </ul>
              <button className="btn btn-outline" style={{width: '100%', marginTop: 'auto'}}>Subscribe Now</button>
            </div>
          </div>
          <p className="price-note">All plans include secure health records and 24/7 emergency support.</p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations">
        <div className="wrap">
          <div className="section-head">
            <h2>Available Locations</h2>
            <p>We are rapidly expanding to bring care to more homes.</p>
          </div>
          <div className="loc-grid">
            <div className="loc-card">
              <h4>📍 Indore</h4>
              <div className="chip-row">
                <span className="chip">Vijay Nagar</span>
                <span className="chip">Palasia</span>
                <span className="chip">Bhawarkuan</span>
              </div>
            </div>
            <div className="loc-card">
              <h4>📍 Bhopal</h4>
              <div className="chip-row">
                <span className="chip">MP Nagar</span>
                <span className="chip">Arera Colony</span>
                <span className="chip">Bairagarh</span>
              </div>
            </div>
            <div className="loc-card">
              <h4>📍 Ujjain</h4>
              <div className="chip-row">
                <span className="chip">Freeganj</span>
                <span className="chip">Nanakheda</span>
                <span className="chip">Dewas Road</span>
              </div>
            </div>
          </div>
          <p className="loc-more">+ Expanding to 20 more cities soon!</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="steps">
        <div className="wrap">
          <div className="section-head">
            <h2>What Our Users Say</h2>
            <p>Thousands of families trust Ghar Aarogyam with their health.</p>
          </div>
          <div className="testi-scroll">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"This app saved us a trip to the hospital in the middle of the night. The doctor was very helpful."</p>
              <div className="testi-who">
                <div className="testi-avatar" style={{background: 'var(--green)'}}>R</div>
                <div>
                  <div className="testi-name">Rahul Sharma</div>
                  <div className="testi-loc">Indore</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"Very convenient for my parents. They can consult their doctor without traveling."</p>
              <div className="testi-who">
                <div className="testi-avatar" style={{background: 'var(--blue)'}}>P</div>
                <div>
                  <div className="testi-name">Pooja Verma</div>
                  <div className="testi-loc">Bhopal</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★☆</div>
              <p className="quote">"Medicine delivery is fast and the discounts are great. Highly recommended."</p>
              <div className="testi-who">
                <div className="testi-avatar" style={{background: 'var(--orange)'}}>A</div>
                <div>
                  <div className="testi-name">Amit Patel</div>
                  <div className="testi-loc">Ujjain</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"The app is so easy to use, even for someone who isn't very tech-savvy like me."</p>
              <div className="testi-who">
                <div className="testi-avatar" style={{background: 'var(--green-dark)'}}>S</div>
                <div>
                  <div className="testi-name">Sunita Singh</div>
                  <div className="testi-loc">Indore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>How do I book a consultation?</summary>
              <div className="faq-body">Simply open the app, select the specialty you need, choose a doctor, and pick an available time slot. You can pay securely within the app.</div>
            </details>
            <details>
              <summary>Are the doctors qualified?</summary>
              <div className="faq-body">Yes, all doctors on our platform undergo a strict verification process. We ensure they have the necessary degrees, registrations, and experience.</div>
            </details>
            <details>
              <summary>How fast is medicine delivery?</summary>
              <div className="faq-body">In major cities, we deliver within 2-4 hours. For other locations, it typically takes 24-48 hours.</div>
            </details>
            <details>
              <summary>Is my health data secure?</summary>
              <div className="faq-body">Absolutely. We use industry-standard encryption to protect all your medical records and personal information. Your data is never shared without your consent.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{padding: '40px 0'}}>
        <div className="wrap">
          <div className="final-cta">
            <h2>Ready to prioritize your health?</h2>
            <p>Join thousands of families already experiencing the convenience of Ghar Aarogyam.</p>
            <div className="final-ctas">
              <a href="#" className="btn btn-primary" style={{background: '#fff', color: 'var(--green-dark)'}}>
                Download App Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <Image src="/logo.jpeg" alt="Ghar Aarogyam logo" width={34} height={34} style={{ objectFit: 'contain' }} />
                Ghar Aarogyam
              </div>
              <p style={{maxWidth: 300}}>Making quality healthcare accessible, affordable, and convenient for every home.</p>
            </div>
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing Plans</a></li>
                <li><a href="#locations">Service Areas</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:info@gharaarogyam.in">info@gharaarogyam.in</a></li>
                <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-disclaimer">
            Disclaimer: Ghar Aarogyam is a platform facilitating medical consultations and services. For severe medical emergencies, please visit the nearest hospital or call an ambulance immediately.
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Ghar Aarogyam (A brand of SEWARTH HEALTHCARE PRIVATE LIMITED). All rights reserved.</span>
            <div style={{display: 'flex', gap: 16}}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
