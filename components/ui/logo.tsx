import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" aria-label="Comelec Logo" className="inline-flex items-center">
      <Image 
        src={logo} 
        alt="PUP SC COMELEC Logo" 
        width={40} 
        height={40}
        className="rounded-full"
      />
      <div className="ml-2 text-xl font-bold text-white md:text-2xl">
        PUP SC COMELEC
      </div>
    </Link>
  );
}