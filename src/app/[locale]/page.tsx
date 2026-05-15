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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Nav />
      <main>
        <Hero locale={locale} />
        <TrustBar locale={locale} />
        <Marquee />
        <Features locale={locale} />
        <HowItWorks locale={locale} />
        <Reviews locale={locale} />
        <Pricing locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer />
    </>
  );
}
