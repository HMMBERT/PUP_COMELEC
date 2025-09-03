"use client";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";


export default function Features() {
  return (
    <section className="relative">
      {/* Background shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                The PUP SC COMELEC
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Official Social Media
            </h2>
            <p className="text-lg text-indigo-200/65">
              Stay updated with the latest announcements, election guidelines,
              candidate information, and official activities of the PUP SC
              Commission on Elections. Follow our official platforms to ensure
              transparency, credibility, and active participation in every step
              of the student democratic process.
            </p>
          </div>

          {/* Social Cards */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {/* Facebook */}
            <article className="bg-slate-900/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Facebook className="mb-3 text-indigo-400" size={28} />
              <h3 className="mb-1 font-semibold text-gray-200">Facebook</h3>
              <p className="text-indigo-200/65 mb-3">
                Connect with us through our official Facebook page.
              </p>
              <a
                href="https://www.facebook.com/comelecpupmain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Visit Page
              </a>
            </article>

            {/* Twitter */}
            <article className="bg-slate-900/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Twitter className="mb-3 text-indigo-400" size={28} />
              <h3 className="mb-1 font-semibold text-gray-200">Twitter</h3>
              <p className="text-indigo-200/65 mb-3">
                Follow us on Twitter for quick updates.
              </p>
              <a
                href="https://twitter.com/comelecpupmain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Follow
              </a>
            </article>

            {/* Instagram */}
            <article className="bg-slate-900/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Instagram className="mb-3 text-indigo-400" size={28} />
              <h3 className="mb-1 font-semibold text-gray-200">Instagram</h3>
              <p className="text-indigo-200/65 mb-3">
                See our updates and posts on Instagram.
              </p>
              <a
                href="https://instagram.com/comelecpupmain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Follow
              </a>
            </article>

            {/* Webmail */}
            <article className="bg-slate-900/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Mail className="mb-3 text-indigo-400" size={28} />
              <h3 className="mb-1 font-semibold text-gray-200">Webmail</h3>
              <p className="text-indigo-200/65 mb-3">
                pup-comelec@pup.edu.ph
              </p>
              <a
                href="mailto:pup-comelec@pup.edu.ph"
                className="inline-block rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Send Email
              </a>
            </article>

            {/* Gmail */}
            <article className="bg-slate-900/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <Mail className="mb-3 text-indigo-400" size={28} />
              <h3 className="mb-1 font-semibold text-gray-200">Gmail</h3>
              <p className="text-indigo-200/65 mb-3">
                pup.studentcouncil.comelec@gmail.com
              </p>
              <a
                href="mailto:pup.studentcouncil.comelec@gmail.com"
                className="inline-block rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Send Email
              </a>
            </article>

            {/* Address */}
            <article className="bg-slate-900/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <MapPin className="mb-3 text-indigo-400" size={28} />
              <h3 className="mb-1 font-semibold text-gray-200">Address</h3>
              <p className="text-indigo-200/65 mb-3">
                Room 201 Charlie Del Rosario Bldg., PUP Mabini Campus, Anonas
                St., Sta. Mesa Manila
              </p>
              <a
                href="https://maps.google.com/?q=PUP+Mabini+Campus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                View Map
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
