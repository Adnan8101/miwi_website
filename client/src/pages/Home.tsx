import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Setup from "@/components/sections/Setup";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1 snap-y snap-mandatory overflow-y-auto">
        <section className="snap-start min-h-screen">
          <Hero />
        </section>
        <section className="snap-start min-h-screen">
          <Features />
        </section>
        <section className="snap-start min-h-screen">
          <Setup />
        </section>
        <section className="snap-start min-h-screen">
          <FAQ />
        </section>
      </main>
    </div>
  );
}