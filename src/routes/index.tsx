import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-900 to-orange-600 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/background.jpeg)" }}
        />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Constellation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100">
            Transform your digital presence with expert consulting and
            innovative solutions
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
