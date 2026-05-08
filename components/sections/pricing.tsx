import { Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Basic',
    price: 'KSh 2,500',
    period: 'per session',
    description: 'Perfect for small spaces and regular upkeep.',
    features: [
      'Up to 2-bedroom home',
      'Standard surface cleaning',
      'Kitchen & bathroom',
      'Dusting & vacuuming',
    ],
  },
  {
    name: 'Standard',
    price: 'KSh 4,500',
    period: 'per session',
    description: 'Our most popular plan for busy households.',
    features: [
      'Up to 4-bedroom home',
      'Deep clean all rooms',
      'Inside appliances',
      'Window interior cleaning',
      'Eco-friendly products',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 'KSh 7,500',
    period: 'per session',
    description: 'Full-service clean for complete peace of mind.',
    features: [
      'Unlimited rooms',
      'Move-in / move-out clean',
      'Post-construction clean',
      'Same-day service available',
      'Dedicated cleaner team',
      'Satisfaction guarantee',
    ],
  },
]

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">

      {/* Soft purple background blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-purple-200" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
              Pricing Plans
            </span>
            <span className="h-px w-10 bg-purple-200" />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Flexible Pricing For{' '}
            <span className="text-purple-600">Every Home</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-500">
            Transparent, affordable pricing with no hidden fees. Choose the plan that works best for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? 'border-purple-500 bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-2xl shadow-purple-200'
                  : 'border-slate-100 bg-white text-slate-900 shadow-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-900">
                  Most Popular
                </div>
              )}

              <div>
                <p className={`text-sm font-semibold ${plan.featured ? 'text-white/70' : 'text-slate-500'}`}>
                  {plan.name}
                </p>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-extrabold leading-none">{plan.price}</span>
                  <span className={`mb-1 text-sm ${plan.featured ? 'text-white/60' : 'text-slate-400'}`}>
                    / {plan.period}
                  </span>
                </div>
                <p className={`mt-3 text-sm leading-6 ${plan.featured ? 'text-white/70' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? 'bg-white/20 text-white' : 'bg-purple-50 text-purple-600'}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={plan.featured ? 'text-white/90' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="https://wa.me/254718477898" target="_blank">
                  <Button
                    className={`w-full rounded-full font-semibold ${
                      plan.featured
                        ? 'bg-white text-purple-700 hover:bg-amber-300 hover:text-purple-900'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    Book This Plan
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-slate-400">
          Custom quotes available for large homes, offices & commercial spaces.{' '}
          <Link href="tel:+254718477898" className="text-purple-500 hover:underline">
            Call us
          </Link>{' '}
          for a free estimate.
        </p>

      </div>
    </section>
  )
}