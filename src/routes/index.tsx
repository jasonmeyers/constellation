import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
