function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/background.jpeg)" }}
      />

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Data-Driven Growth for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Modern Businesses
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We help SMBs unlock revenue growth and build lasting customer
            relationships through intelligent analytics and purpose-built
            digital products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 w-full sm:w-auto">
              Start Your Growth Journey
            </button>
            <button className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300 w-full sm:w-auto">
              View Our Work
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-700/50">
            <p className="text-sm text-slate-400 mb-4">
              Trusted by forward-thinking businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
              <div className="text-sm">
                <span className="text-2xl font-bold text-orange-500">50+</span>
                <span className="block">Businesses Transformed</span>
              </div>
              <div className="text-sm">
                <span className="text-2xl font-bold text-orange-500">2.5x</span>
                <span className="block">Avg Revenue Growth</span>
              </div>
              <div className="text-sm">
                <span className="text-2xl font-bold text-orange-500">90%</span>
                <span className="block">Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
