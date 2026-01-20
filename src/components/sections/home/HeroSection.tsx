import Button from "../../ui/Button";
import Container from "../../ui/Container";

function HeroSection() {
  return (
    <section className="relative bg-white">
      <Container width="reading" className="py-32 md:py-40 text-center">
        {/* Eyebrow text */}
        <p className="text-accent font-medium text-sm uppercase tracking-wide mb-6">
          Digital Consulting for Your Business.
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Data-Driven Growth for{" "}
          <span className="text-accent">Modern Businesses</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          We help SMBs unlock revenue growth and build lasting customer
          relationships through intelligent analytics and purpose-built digital
          products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg">
            Start Your Growth Journey
          </Button>
          <Button variant="secondary" size="lg">
            View Our Work
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-background-border">
          <p className="text-sm text-foreground-tertiary mb-8 uppercase tracking-wide">
            Trusted by forward-thinking businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-foreground-secondary">
                Businesses Transformed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2.5x</div>
              <div className="text-sm text-foreground-secondary">
                Avg Revenue Growth
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">90%</div>
              <div className="text-sm text-foreground-secondary">
                Client Retention
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
