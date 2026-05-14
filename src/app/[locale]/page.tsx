import Nav from "@/components/nav";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Marquee from "@/components/marquee";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Reviews from "@/components/reviews";
import Pricing from "@/components/pricing";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Marquee />
        <Features />
        <HowItWorks />
        <Reviews />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
