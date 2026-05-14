'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[9999]">
      {/* Premium Announcement Bar */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
        }`}
      >
        <div className="flex flex-wrap items-center justify-center bg-slate-900 px-4 py-2.5 text-center text-[11px] font-medium tracking-wide text-slate-300 sm:text-xs">
          <span className="text-yellow-500 mr-1.5">✨ Limited Time:</span> 
          <span>10% off your first deep clean!</span>
          <Link href="https://wa.me/254724359992?text=Hello!%20I%20would%20like%20to%20claim%20the%2010%25%20off%20discount%20for%20my%20first%20deep%20clean." target="_blank" rel="noopener noreferrer" className="ml-2 font-bold text-white underline decoration-yellow-500/50 hover:decoration-yellow-500 transition-colors">
            Claim Offer
          </Link>
        </div>
      </div>

      {/* Floating Navbar Pill */}
      <header className={`transition-all duration-500 ${scrolled ? 'px-4 pt-4' : 'px-4 pt-6'}`}>
        <div
          className={`mx-auto max-w-6xl rounded-full border transition-all duration-500 ${
            scrolled
              ? 'border-slate-200/50 bg-white/85 shadow-2xl shadow-blue-900/5 backdrop-blur-xl px-2 py-2'
              : 'border-transparent bg-transparent px-2 py-2'
          }`}
        >
          <div className="flex items-center justify-between px-4 md:px-2">

            {/* Logo */}
            <Link href="/" className="md:ml-4 transition-transform hover:scale-105">
              <Logo layout="horizontal" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-semibold text-slate-600 transition-all hover:text-blue-600 underline decoration-2 underline-offset-[6px] decoration-transparent hover:decoration-blue-600"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Premium Desktop CTA */}
            <div className="hidden md:block">
              <Link href="https://wa.me/254724359992" target="_blank" className="group flex items-center gap-3 rounded-full bg-slate-900 p-1.5 pr-5 shadow-sm transition-all hover:bg-slate-800 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-slate-900 transition-transform group-hover:scale-105">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Call / WhatsApp</span>
                  <span className="text-sm font-bold leading-none text-white tracking-wide">0724359992</span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full bg-white/50 p-2.5 text-slate-700 transition hover:bg-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {open && (
            <div className="absolute left-0 top-[calc(100%+16px)] w-full px-4 md:hidden">
              <div className="rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
                <nav className="flex flex-col gap-5">
                  {links.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-base font-semibold text-slate-700 transition-all hover:text-blue-600 underline decoration-2 underline-offset-[6px] decoration-transparent hover:decoration-blue-600"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link href="https://wa.me/254724359992" target="_blank" className="group flex w-full justify-center items-center gap-3 rounded-full bg-slate-900 p-2 pr-6 shadow-md transition-all hover:bg-slate-800">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-slate-900">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call / WhatsApp</span>
                      <span className="text-base font-bold leading-none text-white tracking-wide">0724359992</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}