import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';

function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-background-subtle">
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="What We Do"
          title="Services That Drive Results"
          subtitle="We partner with small and medium businesses to accelerate growth through data intelligence and custom digital solutions."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service 1 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Analytics & Insights
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Transform raw data into actionable insights. We build custom
              analytics platforms that help you understand your customers,
              optimize operations, and make data-driven decisions with
              confidence.
            </p>
          </Card>

          {/* Service 2 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Revenue Growth
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Drive sustainable sales growth with intelligent tools and
              strategies. From lead generation to conversion optimization, we
              help you identify opportunities and accelerate your revenue
              pipeline.
            </p>
          </Card>

          {/* Service 3 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Customer Retention
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Build lasting relationships that drive recurring revenue. We
              develop customer engagement platforms and retention strategies
              that turn one-time buyers into loyal advocates.
            </p>
          </Card>

          {/* Service 4 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Custom Product Development
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Purpose-built digital products tailored to your unique needs. We
              design and develop scalable web applications, dashboards, and
              automation tools that solve real business problems.
            </p>
          </Card>

          {/* Service 5 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Digital Strategy
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Chart the right course for digital transformation. We help you
              identify opportunities, prioritize initiatives, and build a
              roadmap that aligns technology investments with business goals.
            </p>
          </Card>

          {/* Service 6 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Process Automation
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Eliminate manual work and boost efficiency. We automate repetitive
              tasks, integrate systems, and streamline workflows so your team
              can focus on high-value activities.
            </p>
          </Card>

          {/* Service 7 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ecommerce Performance
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Streamline your product display, catalog view, and checkout process.
              Optimize every touchpoint to deliver seamless shopping experiences
              and never lose a customer to bad UX.
            </p>
          </Card>

          {/* Service 8 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              A/B Testing
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Make data-driven decisions with confidence. We design and implement
              rigorous testing frameworks to optimize conversions, messaging, and
              user experiences based on real user behavior.
            </p>
          </Card>

          {/* Service 9 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              SEO Management
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Improve your organic visibility and drive qualified traffic. We
              optimize your site structure, content, and technical performance
              to rank higher and attract customers actively searching for your
              solutions.
            </p>
          </Card>

          {/* Service 10 */}
          <Card interactive>
            <div className="w-12 h-12 rounded-xl bg-accent-ghost text-accent flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              SEM
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Maximize ROI from paid search campaigns. We create, manage, and
              optimize search engine marketing strategies that target the right
              audiences, reduce cost-per-acquisition, and drive measurable
              revenue growth.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-lg text-foreground-secondary mb-6">
            Ready to accelerate your business growth?
          </p>
          <Button variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
