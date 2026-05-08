'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
    <header className="fixed left-0 right-0 top-0 z-[9999] px-4 pt-3">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-white/20 bg-white/90 shadow-lg shadow-purple-100/50 backdrop-blur-xl'
            : 'border-white/30 bg-white/70 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight text-slate-900">
            ✨ <span>Sparklet</span>
            <span className="text-purple-600">&amp; Shine</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-slate-600 transition hover:text-purple-600"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="https://wa.me/254718477898" target="_blank">
              <Button className="rounded-full bg-purple-600 px-5 text-white hover:bg-purple-700">
                <MessageCircle className="mr-1.5 h-4 w-4" />
                Book Now
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-purple-50 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-slate-100 px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 transition hover:text-purple-600"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Link href="https://wa.me/254718477898" target="_blank">
              <Button className="mt-5 w-full rounded-full bg-purple-600 text-white hover:bg-purple-700">
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Via WhatsApp
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}