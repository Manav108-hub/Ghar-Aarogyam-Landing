"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#f8fafc] text-[#03A9F4] text-xs py-1.5 border-b border-gray-100">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-5 md:px-20">
          <div className="flex items-center gap-4 font-semibold">
            <a href="mailto:info@gharaarogyam.in" className="hidden sm:flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#0056b3]">mail</span>
              <span className="text-[#0056b3]">info@gharaarogyam.in</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-semibold opacity-80 text-[#7CC043] mr-1">Follow Us:</span>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/gharaarogyam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-[#FCE4EC] rounded-full flex items-center justify-center hover:bg-[#E4405F] transition-colors group"
              title="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-[#E4405F] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-[#E8F0FE] rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors group"
              title="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-[#1877F2] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-[#E3F2FD] rounded-full flex items-center justify-center hover:bg-[#1DA1F2] transition-colors group"
              title="Twitter"
            >
              <svg className="w-3.5 h-3.5 fill-[#1DA1F2] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 00-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 md:px-20 py-2.5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Ghar Aarogyam Logo" width={180} height={90} className="h-12 md:h-14 w-auto object-contain" priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-black hover:text-[#7CC043] font-semibold text-sm transition-colors">Home</Link>
          <Link href="/mission" className="text-black hover:text-[#7CC043] font-semibold text-sm transition-colors">Our Mission</Link>
          <Link href="/faq" className="text-black hover:text-[#7CC043] font-semibold text-sm transition-colors">FAQs</Link>
          <Link href="/check-your-city" className="text-black hover:text-[#7CC043] font-semibold text-sm transition-colors">Check Your City</Link>
          <Link href="/contact" className="text-black hover:text-[#7CC043] font-semibold text-sm transition-colors">Contact</Link>
        </div>

        <Link
          href="/subscription"
          className="hidden md:inline-flex items-center gap-1 bg-[#FF9800] hover:bg-[#e68900] text-white font-bold px-6 py-2.5 rounded-full transition-all shadow-md text-sm"
        >
          Join the Program
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block text-black font-semibold text-sm py-2 border-b" style={{ borderColor: "#a0d8ef" }}>Home</Link>
          <Link href="/mission" onClick={() => setOpen(false)} className="block text-black font-semibold text-sm py-2 border-b" style={{ borderColor: "#a0d8ef" }}>Our Mission</Link>
          <Link href="/faq" onClick={() => setOpen(false)} className="block text-black font-semibold text-sm py-2 border-b" style={{ borderColor: "#a0d8ef" }}>FAQs</Link>
          <Link href="/check-your-city" onClick={() => setOpen(false)} className="block text-black font-semibold text-sm py-2 border-b" style={{ borderColor: "#a0d8ef" }}>Check Your City</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-black font-semibold text-sm py-2 border-b" style={{ borderColor: "#a0d8ef" }}>Contact</Link>
          <Link href="/subscription" onClick={() => setOpen(false)} className="block bg-[#FF9800] text-white text-center font-bold py-3 rounded-full text-sm">Join the Program</Link>
        </div>
      )}
    </header>
  );
}
