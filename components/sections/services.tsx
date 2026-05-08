"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DEFAULT_IMAGE = "/images/bnb-cleaning.png";

const services = [
  {
    id: "01",
    title: "BnB & Short-Stay Cleaning",
    description:
      "We specialise in quick, thorough turnovers for Airbnb and short-stay properties. Fresh linens, restocked amenities, and a hotel-standard finish — every time.",
    image: DEFAULT_IMAGE,
  },
  {
    id: "02",
    title: "Commercial & Office Cleaning",
    description:
      "Create a healthier, more productive workplace with professional cleaning services for offices, retail spaces, and businesses.",
    image: DEFAULT_IMAGE,
  },
  {
    id: "03",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Take the stress out of moving with detailed deep-cleaning for tenants, landlords, and homeowners.",
    image: DEFAULT_IMAGE,
  },
  {
    id: "04",
    title: "Residential Cleaning",
    description:
      "Personalised home cleaning services tailored to your lifestyle. From deep cleans to regular maintenance, we keep your sanctuary spotless.",
    image: DEFAULT_IMAGE,
  },
  {
    id: "05",
    title: "Post-Construction Cleaning",
    description:
      "We remove dust, debris, and construction residue after renovations or new builds — leaving your space ready to move in.",
    image: DEFAULT_IMAGE,
  },
];

export function ServicesSection() {
  const [openIds, setOpenIds] = useState<string[]>(["01"]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="services" className="relative bg-[#F3F0FF] py-14 md:py-24">

      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-10 md:mb-14">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-slate-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Our Services
            </span>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-2xl text-2xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Cleaning Services Designed for Your Lifestyle
            </h2>

            <Link href="#">
              <Button
                variant="outline"
                className="rounded-md border-slate-200 bg-white px-5 py-5 text-slate-700 hover:bg-purple-50 hover:text-purple-700"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>
        </div>

        {/* SERVICES */}
        <div className="rounded-[2rem] border border-slate-100 bg-white overflow-hidden">

          {services.map((service) => {
            const isOpen = openIds.includes(service.id);

            return (
              <div
                key={service.id}
                className="border-b border-slate-100 last:border-none"
              >

                {/* HEADER ROW */}
                <button
                  onClick={() => toggle(service.id)}
                  className={cn(
                    "w-full text-left transition-all duration-300",
                    isOpen && "bg-slate-50"
                  )}
                >
                  <div className="flex items-center justify-between px-4 py-5 md:px-8 md:py-7">

                    {/* Left */}
                    <div className="flex items-center gap-4 md:gap-6">

                      <span className="text-sm font-semibold text-slate-400 md:text-base">
                        {service.id}
                      </span>

                      <h3 className="text-base font-semibold text-slate-900 md:text-2xl">
                        {service.title}
                      </h3>

                    </div>

                    {/* Icon */}
                    <div
                      className={cn(
                        "rounded-full border p-2 transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-purple-600 bg-purple-600 text-white"
                          : "border-slate-200 text-slate-400"
                      )}
                    >
                      <ArrowUpRight size={18} />
                    </div>

                  </div>
                </button>

                {/* CONTENT */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">

                    <div className="grid gap-6 px-4 pb-6 md:grid-cols-2 md:px-8 md:pb-10">

                      {/* TEXT */}
                      <div>

                        <p className="text-sm leading-7 text-slate-600 md:text-base">
                          {service.description}
                        </p>

                        <Button className="mt-5 rounded-md bg-purple-600 text-white hover:bg-purple-700">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                      </div>

                      {/* IMAGE */}
                      <div className="relative h-[180px] overflow-hidden rounded-2xl sm:h-[220px] md:h-[280px]">

                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/5" />

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}