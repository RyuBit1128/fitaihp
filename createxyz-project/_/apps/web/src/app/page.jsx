import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Vision from "../components/Vision";
import CEOMessage from "../components/CEOMessage";
import CaseStudies from "../components/CaseStudies";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with logo and navigation */}
      <Header />

      {/* Hero Section - Main catchphrase and CTA */}
      <Hero />

      {/* Services Overview - 4 column layout */}
      <Services />

      {/* Vision & Mission Section */}
      <Vision />

      {/* CEO Message Section */}
      <CEOMessage />

      {/* Case Studies Highlights */}
      <CaseStudies />

      {/* Final Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
