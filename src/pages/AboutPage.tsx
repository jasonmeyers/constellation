import { Link } from '@tanstack/react-router';
import { Heart, Target, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Card, CardContent, Button } from '../components/ui';

export const AboutPage = () => {
  useSEO({
    title: 'About Us',
    description: 'Learn about Constellation Sonoma\'s mission, values, and the passionate team behind our innovative solutions. Discover our story and commitment to transforming businesses.',
    keywords: ['about us', 'company story', 'team', 'mission', 'values', 'business philosophy'],
  });

  const values = [
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'Your success is our primary focus. We build lasting relationships based on trust, transparency, and exceptional results.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every solution is designed with measurable outcomes in mind. We focus on delivering tangible value to your business.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work as an extension of your team, bringing diverse perspectives and expertise to every project.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With over 15 years in tech and business strategy, Sarah leads our vision of transforming businesses through innovation.',
      expertise: ['Business Strategy', 'Digital Transformation', 'Team Leadership'],
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      bio: 'Former senior engineer at major tech companies, Michael oversees our technical excellence and innovation.',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'DevOps'],
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      bio: 'Award-winning designer with a passion for creating beautiful, user-centered experiences that drive results.',
      expertise: ['UI/UX Design', 'Brand Strategy', 'User Research'],
    },
    {
      name: 'David Park',
      role: 'Growth Strategist',
      bio: 'Data-driven marketer who helps clients optimize their operations and accelerate growth.',
      expertise: ['Growth Hacking', 'Analytics', 'Marketing Strategy'],
    },
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started as a small consultancy focused on helping local businesses embrace digital transformation.',
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Landed our first Fortune 500 client, proving our ability to scale solutions for enterprise needs.',
    },
    {
      year: '2018',
      title: 'Team Expansion',
      description: 'Grew to a team of 15+ experts across development, design, and strategic consulting.',
    },
    {
      year: '2020',
      title: 'Remote-First',
      description: 'Transitioned to remote-first operations, enabling us to serve clients globally.',
    },
    {
      year: '2022',
      title: '500+ Projects',
      description: 'Reached the milestone of 500 successful project deliveries across diverse industries.',
    },
    {
      year: '2024',
      title: 'Innovation Lab',
      description: 'Launched our innovation lab to research and develop cutting-edge solutions.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              About
              <span className="text-primary-200 block">Constellation Sonoma</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're a team of passionate innovators dedicated to transforming businesses 
              through cutting-edge technology and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses of all sizes with innovative solutions that drive growth, 
                efficiency, and success. We believe that every company deserves access to 
                world-class technology and strategic expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in the heart of Sonoma County, we combine the innovative spirit of 
                Silicon Valley with the thoughtful, relationship-focused approach of wine country. 
                This unique perspective allows us to create solutions that are both cutting-edge 
                and deeply human-centered.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A world where every business, regardless of size or industry, has the tools 
                  and knowledge to thrive in the digital age. We envision a future where 
                  technology truly serves humanity and drives positive change.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="shadow" className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts who bring diverse backgrounds and deep expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} variant="shadow">
                <CardContent className="p-6 space-y-4">
                  {/* Placeholder for team member photo */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-sm text-gray-600 text-center">{member.bio}</p>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-gray-900">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here's how we've grown and evolved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're honored to be recognized by industry leaders and our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="shadow" className="text-center">
              <CardContent className="p-6 space-y-4">
                <Award className="w-12 h-12 text-primary-600 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Best Digital Agency 2023</h3>
                <p className="text-gray-600">Sonoma County Business Awards</p>
              </CardContent>
            </Card>

            <Card variant="shadow" className="text-center">
              <CardContent className="p-6 space-y-4">
                <Award className="w-12 h-12 text-primary-600 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Top 100 Startups</h3>
                <p className="text-gray-600">California Business Journal</p>
              </CardContent>
            </Card>

            <Card variant="shadow" className="text-center">
              <CardContent className="p-6 space-y-4">
                <Award className="w-12 h-12 text-primary-600 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Innovation Excellence</h3>
                <p className="text-gray-600">Tech Innovation Awards 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Join Our Team
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed">
                We're always looking for passionate, talented individuals who share our 
                vision of transforming businesses through innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-200 flex-shrink-0" />
                  <span className="text-primary-100">Remote-first culture with flexible hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-200 flex-shrink-0" />
                  <span className="text-primary-100">Comprehensive health and wellness benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-200 flex-shrink-0" />
                  <span className="text-primary-100">Professional development opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-200 flex-shrink-0" />
                  <span className="text-primary-100">Collaborative and inclusive environment</span>
                </div>
              </div>
              <Button variant="secondary" asChild>
                <Link to="/contact">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Our Culture</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Innovation First</h4>
                  <p className="text-primary-100 text-sm">
                    We encourage experimentation and creative problem-solving.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Work-Life Balance</h4>
                  <p className="text-primary-100 text-sm">
                    Flexible schedules and unlimited PTO to recharge.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Continuous Learning</h4>
                  <p className="text-primary-100 text-sm">
                    Conference attendance, training budgets, and mentorship programs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Team Spirit</h4>
                  <p className="text-primary-100 text-sm">
                    Regular team events, retreats, and celebration of wins.
                  </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-100">
              Let's discuss how our team's expertise and passion can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};