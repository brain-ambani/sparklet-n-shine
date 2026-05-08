import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6c47ff] via-[#8b5cf6] to-[#a78bfa]">

          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-12 md:flex-row md:text-left md:gap-10 md:py-12 lg:gap-16">

            {/* Cleaner image — visible on md+ */}
            <div className="relative hidden shrink-0 md:block md:h-36 md:w-32 lg:h-44 lg:w-40">
              <Image
                src="/images/cleaner.png"
                alt="Professional cleaner"
                fill
                className="rounded-2xl object-cover object-top"
                sizes="(min-width: 1024px) 160px, 128px"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">
                Ready to book?
              </span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Join Thousands of Happy Clients &amp;{' '}
                <span className="text-amber-300">Book Today</span>
              </h2>
              <p className="mt-2 text-sm text-white/70 sm:text-base">
                Booking is easy — use our online form, choose your plan, and pick your preferred date &amp; time.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href="https://wa.me/254718477898"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-purple-700 shadow-lg transition hover:bg-amber-300 hover:text-purple-900"
              >
                <MessageCircle className="h-4 w-4" />
                Book Now
              </Link>
              <Link
                href="tel:+254718477898"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}