import { Link } from '@tanstack/react-router';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Card, CardContent, Button } from '../components/ui';

export const PortfolioPage = () => {
  useSEO({
    title: 'Portfolio',
    description: 'Explore Constellation Sonoma\'s portfolio of successful projects and case studies. See how we\'ve helped businesses achieve remarkable results through innovative solutions.',
    keywords: ['portfolio', 'case studies', 'projects', 'success stories', 'work examples'],
  });

  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      client: 'RetailCo',
      category: 'Web Development',
      description: 'Complete redesign and development of a high-performance e-commerce platform that increased conversion rates by 45%.',
      results: ['45% increase in conversion', '2x faster page load times', '60% reduction in cart abandonment'],
      image: 'placeholder',
    },
    {
      title: 'Enterprise CRM System',
      client: 'TechCorp',
      category: 'Custom Software',
      description: 'Built a custom CRM solution tailored to enterprise needs, streamlining customer management across departments.',
      results: ['40% efficiency gain', 'Unified customer data', 'Real-time analytics dashboard'],
      image: 'placeholder',
    },
    {
      title: 'Mobile App Development',
      client: 'StartupXYZ',
      category: 'Mobile',
      description: 'Developed iOS and Android apps for a fast-growing startup, achieving 100k+ downloads in the first month.',
      results: ['100k+ downloads', '4.8-star rating', 'Featured in App Store'],
      image: 'placeholder',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile', 'Custom Software', 'Consulting'];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Our
              <span className="text-primary-200 block">Portfolio</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Explore our collection of successful projects and see how we've helped businesses
              achieve remarkable results through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'primary' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} variant="shadow" className="group hover:shadow-xl transition-shadow">
                <CardContent className="p-0 space-y-4">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{project.title}</span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-sm text-primary-600 font-medium mb-2">{project.category}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <div className="text-sm text-gray-600 mb-2">Client: {project.client}</div>
                      <p className="text-gray-600">{project.description}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900" asChild>
                <Link to="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
