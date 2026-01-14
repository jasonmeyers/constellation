function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We partner with small and medium businesses to accelerate growth
            through data intelligence and custom digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Analytics & Insights
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Transform raw data into actionable insights. We build custom
              analytics platforms that help you understand your customers,
              optimize operations, and make data-driven decisions with
              confidence.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Revenue Growth
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Drive sustainable sales growth with intelligent tools and
              strategies. From lead generation to conversion optimization, we
              help you identify opportunities and accelerate your revenue
              pipeline.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Customer Retention
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Build lasting relationships that drive recurring revenue. We
              develop customer engagement platforms and retention strategies
              that turn one-time buyers into loyal advocates.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Custom Product Development
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Purpose-built digital products tailored to your unique needs. We
              design and develop scalable web applications, dashboards, and
              automation tools that solve real business problems.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Digital Strategy
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Chart the right course for digital transformation. We help you
              identify opportunities, prioritize initiatives, and build a
              roadmap that aligns technology investments with business goals.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Process Automation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Eliminate manual work and boost efficiency. We automate repetitive
              tasks, integrate systems, and streamline workflows so your team
              can focus on high-value activities.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700 mb-6">
            Ready to accelerate your business growth?
          </p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
