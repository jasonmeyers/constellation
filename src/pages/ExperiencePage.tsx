import { Link } from '@tanstack/react-router';
import { ArrowRight, Award, Building2, Users, TrendingUp, Code, Palette, Cloud, Shield } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Card, CardContent, Button } from '../components/ui';

export const ExperiencePage = () => {
  useSEO({
    title: 'Experience',
    description: 'Discover Constellation Sonoma\'s extensive experience across industries and technologies. See our track record of delivering successful solutions.',
    keywords: ['experience', 'expertise', 'track record', 'industries', 'technologies', 'qualifications'],
  });

  const industries = [
    { name: 'E-Commerce & Retail', projects: 120, icon: Building2 },
    { name: 'Healthcare', projects: 85, icon: Shield },
    { name: 'Financial Services', projects: 95, icon: TrendingUp },
    { name: 'Technology', projects: 150, icon: Code },
    { name: 'Education', projects: 60, icon: Users },
    { name: 'Manufacturing', projects: 45, icon: Building2 },
  ];

  const technologies = [
    {
      category: 'Frontend',
      icon: Palette,
      skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: Code,
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      category: 'Mobile',
      icon: Users,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google',
      year: '2023',
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      year: '2022',
    },
    {
      name: 'Azure Developer Associate',
      issuer: 'Microsoft',
      year: '2023',
    },
  ];

  const achievements = [
    {
      metric: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
    },
    {
      metric: '98%',
      label: 'Success Rate',
      description: 'Projects delivered on time and meeting all requirements',
    },
    {
      metric: '10+',
      label: 'Years Experience',
      description: 'Combined team experience in software development',
    },
    {
      metric: '50+',
      label: 'Industries',
      description: 'Different industries we\'ve worked with',
    },
  ];

  const clientTestimonials = [
    {
      quote: 'The team\'s technical expertise and industry knowledge were instrumental in our digital transformation success.',
      author: 'Jennifer Williams',
      role: 'CTO, HealthTech Solutions',
      company: 'Healthcare',
    },
    {
      quote: 'Their experience across multiple technologies allowed them to recommend the perfect solution for our needs.',
      author: 'Robert Martinez',
      role: 'VP of Engineering, FinanceApp',
      company: 'Financial Services',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Our
              <span className="text-primary-200 block">Experience</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A decade of expertise delivering innovative solutions across industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} variant="shadow" className="text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl font-bold text-primary-600">{achievement.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{achievement.label}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've delivered successful solutions across a diverse range of industries,
              bringing specialized knowledge to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} variant="shadow" className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                      <p className="text-primary-600 font-medium">{industry.projects}+ Projects</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is proficient in modern technologies and frameworks,
              allowing us to choose the best tools for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} variant="shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{tech.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team maintains industry-recognized certifications to ensure we're always
              up-to-date with the latest best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} variant="shadow" className="text-center">
                <CardContent className="p-6 space-y-3">
                  <Award className="w-12 h-12 text-primary-600 mx-auto" />
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-primary-600">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from businesses that have benefited from our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} variant="shadow">
                <CardContent className="p-8 space-y-4">
                  <blockquote className="text-lg text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
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
              Put Our Experience to Work for You
            </h2>
            <p className="text-xl text-primary-100">
              Let's discuss how our expertise can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900" asChild>
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
