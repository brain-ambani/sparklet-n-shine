'use client'

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Leaf, Users, Target, Award, Sparkles, Heart, MessageCircle, Phone } from "lucide-react";
import { CTASection, Footer, StatsSection } from "@/components/sections";
import { motion } from "framer-motion";

const values = [
  {
    title: "Trusted Professionals",
    description: "Every cleaner on our team is thoroughly vetted and trained for high-standard cleaning.",
    icon: <ShieldCheck className="h-5 w-5 text-blue-600" />
  },
  {
    title: "Eco-Friendly Products",
    description: "We use sustainable products that are safe for your home and the environment.",
    icon: <Leaf className="h-5 w-5 text-blue-600" />
  },
  {
    title: "Customer First",
    description: "Our services are backed by a 100% satisfaction guarantee to ensure you're happy.",
    icon: <Heart className="h-5 w-5 text-blue-600" />
  },
  {
    title: "Unmatched Quality",
    description: "We bring a hotel-standard finish to every residence, office, and Air BNB.",
    icon: <Award className="h-5 w-5 text-blue-600" />
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans text-slate-900">
      
      {/* Hero Section - Clean & Minimal */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div {...fadeInUp}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-heading">Our Story</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 font-heading">
                  Elevating the <br />
                  <span className="text-blue-600">Standard</span> of Clean.
                </h1>
                
                <p className="max-w-xl text-lg text-slate-600 leading-relaxed mb-8">
                  Sparklet & Shine is Nairobi&apos;s premier professional cleaning partner. We specialize in maintaining pristine standards for <strong>Air BNBs</strong>, <strong>private residences</strong>, and <strong>corporate offices</strong>.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="https://wa.me/254724359992" target="_blank" className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm text-white font-semibold transition-all hover:bg-blue-700 hover:shadow-lg">
                    <span>Book a Service</span>
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                  <Link href="tel:254724359992" className="flex items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-4 text-sm text-slate-900 font-semibold transition-all hover:border-blue-600 hover:text-blue-600">
                    <span>Contact Us</span>
                    <Phone className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative w-full h-[350px] md:h-[500px]">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl"
               >
                 <Image 
                   src="/images/about_lady_royal_blue_1778827871894.png" 
                   alt="Professional cleaning standards" 
                   fill 
                   className="object-cover"
                   style={{ objectPosition: '50% 15%' }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.div {...fadeInUp}>
        <StatsSection hideLearnMore={true} />
      </motion.div>

      {/* Leadership Section - Featuring the new photo */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Founders Photo */}
            <motion.div 
              {...fadeInUp}
              className="lg:w-1/2 relative w-full h-[400px] md:h-[600px]"
            >
               <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                 <Image 
                   src="/images/cofounders.png" 
                   alt="Vivian, Maureen, and Harriet - Sparklet & Shine Founders" 
                   fill 
                   className="object-cover object-top"
                 />
               </div>
            </motion.div>

            {/* Content Container */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
               <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-1 text-slate-500 border border-slate-100">
                 <Users className="h-4 w-4" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-heading">The Founders</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight font-heading">A Vision for <span className="text-blue-600">Excellence.</span></h2>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                 <p>
                   Sparklet & Shine Co. was founded on a simple principle: every space deserves to shine. Led by <strong>Vivian</strong>, <strong>Maureen</strong>, and <strong>Harriet</strong>, we have built a team that Nairobi trusts for precision and care.
                 </p>
                 <p>
                   Whether it&apos;s a high-end <strong>Air BNB</strong>, your <strong>family home</strong>, or a <strong>modern office</strong>, our founders personally ensure that our standard of clean is never compromised.
                 </p>
               </div>
               
               <div className="mt-10 flex flex-wrap gap-8">
                  <div>
                    <p className="text-slate-900 font-bold text-xl font-heading">Vivian</p>
                    <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">Founder</p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xl font-heading">Maureen</p>
                    <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">Partner</p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xl font-heading">Harriet</p>
                    <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">Partner</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div {...fadeInUp}>
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">Our Core Values</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                 We are committed to providing a reliable, top-tier service that makes a real difference in your environment.
               </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl bg-white p-8 border border-slate-100 transition-all hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 font-heading">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />

      <Footer />
    </main>
  );
}
