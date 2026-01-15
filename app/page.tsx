import Image from "next/image";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans flex-col">
      {/* first section of hero page */}
      <div
        className="h-screen "
      >
        <Image
            className=""
            src="/alegria.png"
            alt="Next.js logo"
            fill
            priority
          />
      </div>

      <ServicesSection />
    </div>
  );
}
