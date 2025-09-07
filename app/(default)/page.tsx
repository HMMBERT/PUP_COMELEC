export const metadata = {
  title: "Home - PUP COMELEC",
  description: "Page description",
  icons: {
    icon: "/images/logo.ico", 
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/Mission Vision Obj";
import Features from "@/components/Socials";
import Testimonials from "@/components/Archive";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
