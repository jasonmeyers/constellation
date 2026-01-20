import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <div>
      <section className="relative text-foreground bg-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/background.jpeg)" }}
        />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground-muted">
            Comprehensive digital consulting solutions tailored to your business
            needs
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition">
              View All Services
            </button>
            <button className="border-2 border-accent text-accent-hover px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
