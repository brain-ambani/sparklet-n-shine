'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Phone, Mail, Sparkles, ArrowRight } from 'lucide-react'

const quickLinks = ['Home', 'Services', 'Pricing', 'About Us', 'Contact Us']

const services = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Move In / Move Out Cleaning',
  'Eco-Friendly Cleaning',
]

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'Twitter / X' },
]

const phones = ['+254 718 477 898', '+254 383 2675']

export function Footer() {
  return (
    <footer className="bg-[#06101f] text-white">

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── Col 1 · Brand ── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span>Sparklet</span>
              <span className="text-purple-400">&amp; Shine</span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Professional cleaning services for homes and offices across Nairobi.
              Our team is dedicated to making every space spotless, healthy, and welcoming.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-purple-500 hover:bg-purple-500/20 hover:text-purple-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2 · Quick Links ── */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-sm text-white/70 transition hover:text-purple-300"
                  >
                    <ArrowRight className="h-3 w-3 text-purple-500 opacity-0 transition group-hover:opacity-100" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 · Services ── */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-sm text-white/70 transition hover:text-purple-300"
                  >
                    <ArrowRight className="h-3 w-3 text-purple-500 opacity-0 transition group-hover:opacity-100" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 · Contact ── */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Contact
            </h4>

            <div className="flex flex-col gap-4">
              {phones.map((p) => (
                <Link
                  key={p}
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition hover:text-purple-300"
                >
                  <Phone className="h-3.5 w-3.5 text-purple-400" />
                  {p}
                </Link>
              ))}

              <Link
                href="mailto:info@sparkletandshine.co.ke"
                className="flex items-center gap-2 text-sm text-white/70 transition hover:text-purple-300"
              >
                <Mail className="h-3.5 w-3.5 text-purple-400" />
                info@sparkletandshine.co.ke
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row lg:px-8">
          <p className="text-xs text-white/35">
            © Copyright 2026 · Sparklet &amp; Shine. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            <Link href="#" className="transition hover:text-white/70">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}