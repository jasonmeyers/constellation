import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/background.jpeg)' }} />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            Comprehensive digital consulting solutions tailored to your business needs
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              View All Services
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
