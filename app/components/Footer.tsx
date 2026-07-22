import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-20 py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Brand */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo-icon.png" alt="Ghar Aarogyam" width={48} height={48} className="w-12 h-12 object-contain rounded-full bg-white p-0.5" />
            <span className="font-black text-xl">
              <span className="font-black text-xl"><span className="text-[#7CC043]">Ghar </span><span className="text-[#FF9800]">Aarogyam</span></span>
              <span className="text-sm text-gray-400 p-2">by "Sewath"&trade;</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            Tailored solutions, compassionate support, technology-driven wellness.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            <strong className="text-white">Sewarth Healthcare Pvt Ltd.</strong><br />
            Sewarth Healthcare Pvt Ltd, Flat No. 106, First Floor, Block B, Datt Township, Bihari, Jabalpur (MP) – 482020, India
          </p>
        </div>

        {/* Social */}
        {/* <div className="flex gap-3">
          <a href="https://www.instagram.com/gharaarogyam" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9800] transition-colors">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div> */}
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-20 text-[10px] text-gray-500 leading-relaxed">
          <p className="font-bold text-gray-400 mb-2">DISCLAIMER</p>
          <p className="mb-3">The information, educational materials, communications, and support content provided through this Patient Support Program (&quot;Ghar Aarogyam&quot;) are intended solely for patient education, disease awareness, treatment adherence support, and general health information purposes. This material is not intended to promote, prescribe, recommend, or replace professional medical advice, diagnosis, or treatment. Patients should always consult their treating physician or qualified healthcare professional regarding any medical condition, treatment decisions, medication use, or healthcare concerns.</p>
          <p className="mb-3">This material is not intended to promote the use of any prescription medicine in a manner inconsistent with its approved prescribing information or applicable regulatory requirements. The content presented herein is based on information available at the time of publication and may be subject to change.</p>
          <p>Enrolment in the program is voluntary and does not constitute an inducement to prescribe, recommend, purchase, or continue any medication. By accessing or using the materials and services, participants acknowledge and agree to the terms of this disclaimer.</p>
          <div className="mt-6 pt-4 border-t border-white/5 text-center text-gray-600">
            © {new Date().getFullYear()} Sewarth Healthcare Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
