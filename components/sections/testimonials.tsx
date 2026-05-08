"use client";

import { Star, Quote } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "I couldn't be happier with the service! My home has never looked so clean.",
    author: "Rodger Struck",
    role: "Homeowner",
  },
  {
    quote:
      "They did an amazing job with our office cleaning. The staff was professional and reliable.",
    author: "Rhonda Rhodes",
    role: "Office Manager",
  },
  {
    quote:
      "We booked a deep cleaning before our party, and it was absolutely perfect.",
    author: "Kathy Pacheco",
    role: "Homeowner",
  },
  {
    quote:
      "Fantastic service! The cleaners were careful, respectful, and thorough.",
    author: "Kenneth Allen",
    role: "Apartment Resident",
  },
  {
    quote:
      "Moving out was stressful, but this team made everything so much easier.",
    author: "David Elson",
    role: "Renter",
  },
  {
    quote:
      "Eco-friendly, professional, and reliable. I love that they use safe products.",
    author: "Mary Freund",
    role: "Mom & Homeowner",
  },
];

export function TestimonialsSection() {
  const row1 = useAnimationControls();
  const row2 = useAnimationControls();

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    row1.start({
      x: ["0%", "-50%"],
      transition: { duration: 25, repeat: Infinity, ease: "linear" },
    });

    row2.start({
      x: ["-50%", "0%"],
      transition: { duration: 28, repeat: Infinity, ease: "linear" },
    });
  };

  const stop = () => {
    row1.stop();
    row2.stop();
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 md:py-12">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-10 text-center">

          <div className="mb-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300">
              Testimonials
            </span>
          </div>

          <h2 className=" text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
            Happy Customers, 
            Cleaner Homes
          </h2>

          {/* Rating */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur sm:mt-2  ">

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <div className="h-5 w-px bg-white/10" />

            <div className="text-left">
              <p className="text-base font-bold text-white sm:text-lg">
                5.0 Rating
              </p>
              <p className="text-xs text-slate-400">
                Trusted by 50+ Clients
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div
          className="space-y-5 overflow-hidden"
          onMouseEnter={stop}
          onMouseLeave={start}
        >

          {/* ROW 1 */}
          <motion.div className="flex gap-4 sm:gap-5" animate={row1}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[220px] sm:w-[260px] md:w-[300px] flex-shrink-0"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </motion.div>

          {/* ROW 2 */}
          <motion.div className="flex gap-4 sm:gap-5" animate={row2}>
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <div
                key={i}
                className="w-[220px] sm:w-[260px] md:w-[300px] flex-shrink-0"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="group flex h-full min-h-[190px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-5">

      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="currentColor" />
          ))}
        </div>

        <div className="rounded-full bg-white/10 p-2 text-slate-300">
          <Quote className="h-4 w-4" />
        </div>
      </div>

      {/* Quote */}
      <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
        "{quote}"
      </p>

      {/* Author */}
      <div className="mt-5">
        <h4 className="text-sm font-semibold text-white sm:text-base">
          {author}
        </h4>
        <p className="text-xs text-slate-400 sm:text-sm">{role}</p>
      </div>
    </div>
  );
}