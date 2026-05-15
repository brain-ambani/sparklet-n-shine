'use client'

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Leaf, Users, Target, Award, Sparkles, Heart, MessageCircle, Phone, Zap } from "lucide-react";
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

      {/* Mission Section with Image Collage */}
      <section className="py-24 overflow-hidden bg-white relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Text Content */}
            <motion.div {...fadeInUp} className="lg:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
                <Target className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] font-heading">Our Mission</span>
              </div>
              
              <h2 className="mb-8 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl font-heading">
                Redefining the standard of clean across Nairobi.
              </h2>
              
              <div className="space-y-8 text-lg leading-relaxed text-slate-600 font-light">
                <p>
                  Sparklet &amp; Shine Co. was founded with a simple goal: to provide reliable, top-tier cleaning services that actually make a difference. We recognized a gap in the market for professional cleaners who treat every home and office with the same meticulous care they would their own.
                </p>
                <p>
                  We are not just a cleaning company; we are your partners in maintaining a healthy, stress-free environment. Whether you manage a bustling Airbnb, a large corporate office, or simply need an extra hand keeping your home spotless, our highly-trained team brings precision, eco-friendly products, and a commitment to excellence to every job.
                </p>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-5">
                    <div className="h-16 w-16 rounded-2xl bg-blue-600 overflow-hidden relative shadow-lg rotate-3 group">
                       <Image 
                         src="/images/about_lady_royal_blue_1778827871894.png" 
                         alt="Sparklet Service" 
                         fill 
                         className="object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                       />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 font-heading">Dedicated Team</h4>
                      <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Committed to Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Collage Area */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:w-1/2 w-full relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                 <div className="space-y-4 md:space-y-6">
                   <div className="h-56 md:h-64 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl border border-slate-100">
                     <Image src="/images/residential_cleaning_1778827681402.png" alt="Residential Cleaning" fill className="object-cover" />
                   </div>
                   <div className="h-72 md:h-80 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl border border-slate-100">
                     <Image src="/images/commercial_cleaning_1778827651938.png" alt="Commercial Cleaning" fill className="object-cover" />
                   </div>
                 </div>
                 <div className="space-y-4 md:space-y-6 pt-12 md:pt-16">
                   <div className="h-72 md:h-80 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl border border-slate-100">
                     <Image src="/images/move_in_cleaning_1778827666240.png" alt="Move-in Cleaning" fill className="object-cover" />
                   </div>
                   <div className="h-56 md:h-64 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl border border-slate-100">
                     <Image src="/images/post_construction_1778827694625.png" alt="Post-construction" fill className="object-cover" />
                   </div>
                 </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-yellow-500 text-slate-900 p-6 rounded-[2rem] shadow-2xl z-20 max-w-[200px] hidden md:block border-4 border-white">
                <Zap className="h-8 w-8 mb-2" />
                <p className="font-bold leading-tight">Same Day Availability in Selected Areas</p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Leadership Section - Featuring the new photo */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Founders Photo */}
            <motion.div
              {...fadeInUp}
              className="lg:w-1/2 w-full"
            >
              <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                <Image
                  src="/images/cofounders.png"
                  alt="Vivian, Maureen, and Harriet - Sparklet & Shine Founders"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">Our Core <span className="text-yellow-500">Values</span></h2>
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
                className="group rounded-2xl bg-white p-8 border border-slate-100 transition-all hover:shadow-xl hover:shadow-yellow-500/5 hover:border-yellow-500/30"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-yellow-500 group-hover:text-slate-900 group-hover:shadow-md">
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
