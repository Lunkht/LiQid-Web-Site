import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Download />
      </main>
      <Footer />
    </>
  );
}
