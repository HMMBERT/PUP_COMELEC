"use client";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react";

// The decorative SVGs are referenced as strings from the /public directory
import BlurredShape from "@/public/images/blurred-shape.svg";

// Data array for social media cards for cleaner, more maintainable code
const socialLinks = [
  {
    icon: Facebook,
    title: "Facebook",
    description: "Connect with us through our official Facebook page.",
    href: "https://www.facebook.com/comelecpupmain",
    cta: "Visit Page",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow us on Twitter for quick updates.",
    href: "https://twitter.com/comelecpupmain",
    cta: "Follow",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "See our updates and posts on Instagram.",
    href: "https://instagram.com/comelecpupmain",
    cta: "Follow",
  },
  {
    icon: Mail,
    title: "Webmail",
    description: "pup-comelec@pup.edu.ph",
    href: "mailto:pup-comelec@pup.edu.ph",
    cta: "Send Email",
  },
  {
    icon: Mail,
    title: "Gmail",
    description: "pup.studentcouncil.comelec@gmail.com",
    href: "mailto:pup.studentcouncil.comelec@gmail.com",
    cta: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Room 201, Charlie Del Rosario Bldg., PUP Mabini Campus",
    href: "https://www.google.com/maps/place/Polytechnic+University+of+the+Philippines",
    cta: "View Map",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Shapes */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[80%] opacity-40"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred decorative shape"
        />
      </div>

       {/* Background radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-slate-950 to-slate-950"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-blue-900/50 py-12 md:py-20">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-16">
            <div className="mb-4 inline-flex bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-medium text-transparent">
              The PUP SC COMELEC
            </div>
            <h2 className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-4 text-4xl font-extrabold text-transparent md:text-5xl">
              Official Channels
            </h2>
            <p className="text-lg text-slate-400">
              Stay updated with the latest announcements, election guidelines,
              and official activities of the PUP SC Commission on Elections.
            </p>
          </div>

          {/* Social Cards Grid */}
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((social, index) => (
              <article
                key={index}
                className="flex h-full flex-col rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-6 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50"
              >
                <div className="mb-4">
                  <social.icon className="text-sky-400" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="mb-1 font-semibold text-slate-100">
                    {social.title}
                  </h3>
                  <p className="text-slate-400">{social.description}</p>
                </div>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-500 hover:to-sky-400 sm:w-auto"
                >
                  {social.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}