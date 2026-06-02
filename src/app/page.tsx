import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { StackSection } from "@/components/sections/StackSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { DeployHistorySection } from "@/components/sections/DeployHistorySection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ActivityStreamSection } from "@/components/sections/ActivityStreamSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full flex flex-col gap-32 pb-32">
        <HeroSection />
        <OverviewSection />
        <ServicesSection />
        <ArchitectureSection />
        <StackSection />
        <AnalyticsSection />
        <DeployHistorySection />
        <CredentialsSection />
        <ActivityStreamSection />
        <Footer />
      </div>
    </main>
  );
}
