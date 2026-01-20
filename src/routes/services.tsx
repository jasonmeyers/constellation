import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <div className="bg-white">
      <section className="relative bg-white border-b border-background-border">
        <Container width="reading" className="py-24 md:py-32 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wide mb-6">
            Our Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive Digital Consulting
          </h1>

          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Tailored solutions to help your business grow, optimize, and thrive
            in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
