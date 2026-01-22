import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Star, Users, Zap, Target } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Button, Card, CardContent } from '../components/ui';

export const HomePage = () => {
  useSEO({
    title: 'Home',
    description: 'Transform your business with Constellation Sonoma\'s expert services. We deliver innovative solutions that drive growth, efficiency, and success for companies across all industries.',
    keywords: ['business transformation', 'professional services', 'growth solutions', 'innovation', 'consulting'],
  });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Results',
      description: 'Get up and running quickly with our streamlined processes and proven methodologies.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with seasoned professionals who understand your industry and challenges.',
    },
    {
      icon: Target,
      title: 'Targeted Solutions',
      description: 'Custom-tailored approaches that align perfectly with your business objectives.',
    },
  ];

  const testimonials = [
    {
      content: 'Constellation Sonoma transformed our operations completely. The results exceeded all our expectations.',
      author: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      rating: 5,
    },
    {
      content: 'Professional, efficient, and results-driven. Best investment we made for our business.',
      author: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      rating: 5,
    },
  ];

  const benefits = [
    'Increased efficiency by up to 40%',
    'Reduced operational costs',
    'Improved customer satisfaction',
    'Scalable growth strategies',
    'Data-driven decision making',
    '24/7 support and maintenance',
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with
                <span className="text-primary-200 block">Expert Solutions</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Unlock your company's potential with our proven strategies, cutting-edge technology, 
                and dedicated expertise. Join hundreds of successful businesses who trust Constellation Sonoma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">500+ Projects Delivered</h3>
                      <p className="text-primary-200">Across 50+ Industries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">98% Success Rate</h3>
                      <p className="text-primary-200">Client Satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Team</h3>
                      <p className="text-primary-200">10+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Constellation Sonoma?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative approaches to deliver 
              exceptional results that drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} variant="shadow" className="text-center">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Proven Results That Speak for Themselves
              </h2>
              <p className="text-lg text-gray-600">
                Our clients consistently achieve remarkable improvements in their operations, 
                growth metrics, and overall business performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/experience">
                  View Our Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-primary-100">
                  Join hundreds of successful businesses who have transformed their operations with our help.
                </p>
                <div className="space-y-4">
                  <div className="border border-primary-400 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Free Consultation</h4>
                    <p className="text-sm text-primary-100">
                      Get expert insights and a customized roadmap for your business.
                    </p>
                  </div>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real success stories from businesses that have transformed with our help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="shadow">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100">
              Don't wait to unlock your company's potential. Get started today with a free consultation 
              and discover how we can help you achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900" asChild>
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};