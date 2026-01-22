import { Link } from '@tanstack/react-router';
import { Code, Palette, BarChart, Shield, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Button, Card, CardContent, CardHeader, CardTitle } from '../components/ui';
import { type Service } from '../types';

export const ServicesPage = () => {
  useSEO({
    title: 'Services',
    description: 'Comprehensive professional services including web development, design, analytics, security, and consulting. Tailored solutions to accelerate your business growth and digital transformation.',
    keywords: ['web development', 'design services', 'business analytics', 'security consulting', 'digital transformation', 'professional services'],
  });

  const services: Service[] = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.',
      features: [
        'React/Next.js applications',
        'Full-stack development',
        'API integration',
        'Performance optimization',
        'Mobile-responsive design',
        'SEO optimization'
      ],
      icon: 'Code',
      price: 'Starting at $5,000'
    },
    {
      id: '2',
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design systems',
        'Usability testing',
        'Brand identity',
        'Interactive prototypes'
      ],
      icon: 'Palette',
      price: 'Starting at $3,000'
    },
    {
      id: '3',
      title: 'Business Analytics',
      description: 'Data-driven insights to optimize your operations and drive growth.',
      features: [
        'Custom dashboards',
        'Performance metrics',
        'ROI analysis',
        'Market research',
        'Competitive analysis',
        'Growth strategies'
      ],
      icon: 'BarChart',
      price: 'Starting at $2,500'
    },
    {
      id: '4',
      title: 'Security Consulting',
      description: 'Comprehensive security audits and implementation of best practices.',
      features: [
        'Security assessments',
        'Vulnerability testing',
        'Compliance audits',
        'Security training',
        'Incident response',
        'Policy development'
      ],
      icon: 'Shield',
      price: 'Starting at $4,000'
    },
    {
      id: '5',
      title: 'Performance Optimization',
      description: 'Accelerate your applications and improve user experience.',
      features: [
        'Site speed optimization',
        'Database tuning',
        'Code optimization',
        'CDN setup',
        'Monitoring setup',
        'Performance audits'
      ],
      icon: 'Zap',
      price: 'Starting at $2,000'
    },
    {
      id: '6',
      title: 'Team Training',
      description: 'Upskill your team with modern development and design practices.',
      features: [
        'Custom workshops',
        'Hands-on training',
        'Best practices',
        'Team mentoring',
        'Code reviews',
        'Ongoing support'
      ],
      icon: 'Users',
      price: 'Starting at $1,500'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Code,
      Palette,
      BarChart,
      Shield,
      Zap,
      Users
    };
    return icons[iconName] || Code;
  };

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, challenges, and requirements.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive plan tailored to your specific needs and objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with regular updates and transparent communication.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Launch your project with full testing, documentation, and training.',
    },
    {
      step: '05',
      title: 'Support',
      description: 'Ongoing maintenance, updates, and optimization to ensure long-term success.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Professional Services That
              <span className="text-primary-200 block">Drive Results</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From web development to business analytics, we provide comprehensive solutions 
              that help your business thrive in the digital age.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your unique business needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = getIcon(service.icon || 'Code');
              return (
                <Card key={service.id} variant="shadow" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary-600">{service.price}</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/contact">
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful delivery and exceptional results for every project.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2 flex justify-center md:justify-end">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="md:col-span-10 space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Businesses Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600">Seasoned professionals with deep industry knowledge and proven track records.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent Process</h4>
                    <p className="text-gray-600">Clear communication, regular updates, and full visibility into project progress.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Guaranteed Results</h4>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties and ongoing support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Scalable Solutions</h4>
                    <p className="text-gray-600">Built to grow with your business and adapt to changing requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-primary-100">
                  Let's discuss your project and how we can help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm text-primary-200">Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-primary-200">Success Rate</div>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">
                      Get Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-primary-100">
              Don't let outdated systems and processes hold you back. Partner with us to unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900" asChild>
                <Link to="/experience">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};