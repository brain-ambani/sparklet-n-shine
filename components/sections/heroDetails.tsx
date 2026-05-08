// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";

// export function HeroDetails() {
//   return (
//     <div className="mx-auto mt-36 flex max-w-6xl items-start justify-between gap-8">
      
//       {/* Left Image */}
//       <div className="w-1/4">
//         <Image
//           src="/hero-image.jpg"
//           alt="Sparklet & Shine"
//           width={500}
//           height={600}
//           className="h-auto w-full object-cover"
//         />
//       </div>

//       {/* Center Content */}
//       <div className="flex w-1/2 flex-col items-center text-center">
        
//         {/* Small Text */}
//         <p className="mb-4 text-sm font-medium text-muted-foreground">
//           ✨ Spotless Spaces, Stress-Free Living
//         </p>

//         {/* Heading */}
//         <h1 className="text-5xl font-bold leading-tight tracking-tight">
//           Premium Cleaning <br />
//           Services You Can <br />
//           Count On
//         </h1>

//         {/* Description */}
//         <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
//           We don&apos;t just clean — we bring peace of mind.
//           With eco-friendly products, skilled cleaners,
//           and attention to every detail.
//         </p>

//         {/* CTA */}
//         <Link
//           href="https://wa.me/254718477898"
//           target="_blank"
//         >
//           <Button className="mt-8 rounded-md px-8 py-6 text-base font-semibold">
//             Book Via WhatsApp
//           </Button>
//         </Link>
//       </div>

//       {/* Right Image */}
//       <div className="w-1/4">
//         <Image
//           src="/hero-image.jpg"
//           alt="Sparklet & Shine"
//           width={500}
//           height={600}
//           className="h-auto w-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function HeroDetails() {
  return (
    <section className="relative overflow-hidden px-4 pt-28 pb-16 md:px-6">

      {/* Desktop Layout */}
      <div className="mx-auto hidden max-w-6xl items-start justify-between gap-8 md:flex">

        {/* Left Image */}
        <div className="w-1/4">
          <Image
            src="/hero-image.jpg"
            alt="Sparklet & Shine"
            width={500}
            height={600}
            className="w-full rounded-3xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex w-1/2 flex-col items-center text-center">

          <div className="mb-5 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
            ✨ Spotless Spaces, Stress-Free Living
          </div>

          <h1 className="text-6xl font-bold leading-tight tracking-tight">
            <span className="text-amber-500">Premium</span> Cleaning <br />
            Services You Can <br />
            Count On
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            We don&apos;t just clean — we bring peace of mind.
            With eco-friendly products, skilled cleaners,
            and attention to every detail.
          </p>

          <Link
            href="https://wa.me/254718477898"
            target="_blank"
          >
            <Button className="mt-8 rounded-full bg-purple-500 px-8 py-6 text-base font-semibold text-white hover:bg-purple-600">
              Book Via WhatsApp
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-1/4">
          <Image
            src="/hero-image.jpg"
            alt="Sparklet & Shine"
            width={500}
            height={600}
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="relative overflow-hidden rounded-[32px] md:hidden">

        {/* Background Image */}
        <Image
          src="/hero-image.jpg"
          alt="Sparklet & Shine"
          width={1000}
          height={1200}
          className="h-[650px] w-full object-cover blur-[2px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">

          <div className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            ✨ Spotless Spaces, Stress-Free Living
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            <span className="text-amber-400">Premium</span> Cleaning Services You Can Count On
          </h1>

          <p className="mt-5 text-base leading-7 text-white/80">
            Eco-friendly products, skilled cleaners,
            and spotless results every time.
          </p>

          <Link
            href="https://wa.me/254718477898"
            target="_blank"
          >
            <Button className="mt-8 rounded-full bg-purple-500 px-7 py-6 text-white hover:bg-purple-600">
              Book Via WhatsApp
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
}