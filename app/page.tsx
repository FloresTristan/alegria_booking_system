import Image from "next/image";
import ServicesSection from "./ServicesSection";
import Navbar from "@/components/Navbar";
import FloatingSectionDivider from "@/components/FloatingSectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen  items-center justify-center bg-zinc-50 font-sans flex-col">
      <div
        className="w-full h-[10%] z-50"
      >
        <Navbar />
      </div>
      {/* first section of hero page */}
      <div
        className="h-[90%] "
      >
        <Image
            className=""
            src="/alegria.png"
            alt="Alegria Background"
            width={1920}
            height={1080}
            priority
          />
      </div>

      <div
        className="w-full h-16"
      >
        <FloatingSectionDivider />
      </div>

      <ServicesSection />
      <Footer />
    </div>
  );
}
