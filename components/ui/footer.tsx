import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          
        </div>

<div className="grid grid-cols-2 justify-between gap-4 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-5 lg:grid-rows-1 xl:gap-6">
          {/* 1st block - About PUP SC COMELEC */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about#mandates"
                >
                  Mandates &amp; Objectives
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about#office"
                >
                  Office &amp; Socials
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/members"
                >
                  Commission Members
                </Link>
              </li>
            </ul>
          </div>

          {/* 2nd block - Resources */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/election-code"
                >
                  Election Code
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/irr"
                >
                  IRR
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/resolutions"
                >
                  Resolutions
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/petitions"
                >
                  Petitions &amp; Decisions
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - Results */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Results</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/results"
                >
                  Official Results
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/results#unofficial"
                >
                  Unofficial Results
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block - Connect & Socials */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Connect</h3>
            <ul className="space-y-3 text-sm">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/comelecpupmain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-indigo-200/65 transition hover:text-indigo-500"
                >
                  <Facebook className="h-5 w-5" />
                  <span>@comelecpupmain</span>
                </a>
              </li>

              {/* Twitter (X) */}
              <li>
                <a
                  href="https://twitter.com/comelecpupmain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-indigo-200/65 transition hover:text-indigo-500"
                >
                  <Twitter className="h-5 w-5" />
                  <span>@comelecpupmain</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://instagram.com/comelecpupmain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-indigo-200/65 transition hover:text-indigo-500"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@comelecpupmain</span>
                </a>
              </li>

              {/* Emails */}
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-200/65" />
                <a
                  href="mailto:pup-comelec@pup.edu.ph"
                  className="hover:text-indigo-500"
                >
                  pup-comelec@pup.edu.ph
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-200/65" />
                <a
                  href="mailto:pup.studentcouncil.comelec@gmail.com"
                  className="hover:text-indigo-500"
                >
                  pup.studentcouncil.comelec@gmail.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center space-x-3 text-indigo-200/65">
               
                <span>
                  Room 201 Charlie Del Rosario Bldg.PUP Manila,
                </span>
              </li>
            </ul>
          </div>

          {/* 5th block - Logo and Copyright */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © {new Date().getFullYear()} PUP SC COMELEC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
