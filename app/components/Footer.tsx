import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image src="/logo.jpeg" alt="Ghar Aarogyam" width={45} height={45} className="rounded-full bg-white p-1 object-contain" />
            <span className="font-black text-xl text-[#7CC043]">Ghar Aarogyam</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Tailored solutions, compassionate support, technology-driven wellness.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            <strong className="text-white">Sewarth Healthcare Pvt Ltd.</strong><br />
            123 Wellness Avenue, Health City<br />
            State, India - 400001
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-[#7CC043] transition-colors">Home</Link></li>
            <li><Link href="/mission" className="hover:text-[#7CC043] transition-colors">Our Mission</Link></li>
            <li><Link href="/subscription" className="hover:text-[#7CC043] transition-colors">Join the Program</Link></li>
            <li><Link href="/faq" className="hover:text-[#7CC043] transition-colors">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-[#7CC043] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#BAEAF7] text-[16px]">call</span> 1-800-AAROGYAM</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#BAEAF7] text-[16px]">mail</span> info@gharaarogyam.in</li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/gharaarogyam" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#BAEAF7] transition-colors">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-white/10 bg-black/30 py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-20 text-[10px] text-gray-500 leading-relaxed">
          <p className="font-bold text-gray-400 mb-2">DISCLAIMER</p>
          <p className="mb-3">The information, educational materials, communications, and support content provided through this Patient Support Program ("Ghar Aarogyam") are intended solely for patient education, disease awareness, treatment adherence support, and general health information purposes. This material is not intended to promote, prescribe, recommend, or replace professional medical advice, diagnosis, or treatment. Patients should always consult their treating physician or qualified healthcare professional regarding any medical condition, treatment decisions, medication use, or healthcare concerns.</p>
          <p className="mb-3">This material is not intended to promote the use of any prescription medicine in a manner inconsistent with its approved prescribing information or applicable regulatory requirements. The content presented herein is based on information available at the time of publication and may be subject to change. While every effort has been made to ensure accuracy, no warranty or representation is made regarding completeness or accuracy.</p>
          <p>Enrolment/Registration in the program is voluntary and does not constitute an inducement to prescribe, recommend, purchase, or continue any medication. By accessing or using the materials and services, participants acknowledge and agree to the terms of this disclaimer.</p>
          <div className="mt-6 pt-4 border-t border-white/5 text-center text-gray-600">
            © {new Date().getFullYear()} Sewarth Healthcare Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

