import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { Card, CardContent, Button } from "../components/ui";
import { ContactForm } from "../components/forms";

export const ContactPage = () => {
  useSEO({
    title: "Contact Us",
    description:
      "Get in touch with Constellation Sonoma. We're here to answer your questions and discuss how we can help transform your business.",
    keywords: [
      "contact",
      "get in touch",
      "consultation",
      "support",
      "reach us",
    ],
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "constellationsonoma@gmail.com",
      action: "constellationsonoma@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (707) 913-7818",
      action: "tel:+17079137818",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Petaluma, California",
      action: null,
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9AM - 6PM PST",
      action: null,
    },
  ];

  const reasons = [
    {
      title: "Free Consultation",
      description:
        "Get expert advice and a customized roadmap for your business at no cost.",
    },
    {
      title: "Quick Response",
      description:
        "We respond to all inquiries within 24 hours during business days.",
    },
    {
      title: "No Obligation",
      description:
        "Discuss your needs with no pressure or commitment required.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Let's
              <span className="text-primary-200 block">Connect</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Have a project in mind? Want to learn more about our services?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.action ? (
                      <a
                        href={info.action}
                        className="text-primary-600 hover:text-primary-700 transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-gray-600">{info.content}</span>
                    );

                    return (
                      <Card key={index} variant="bordered">
                        <CardContent className="p-4 flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            {content}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Reach Out?
                </h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card variant="shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How quickly will I get a response?
                  </h3>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within 24 hours during
                    business days. Urgent matters are typically addressed even
                    faster.
                  </p>
                </CardContent>
              </Card>

              <Card variant="shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Is the initial consultation really free?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We offer a complimentary consultation to understand
                    your needs and provide initial recommendations with no
                    obligation.
                  </p>
                </CardContent>
              </Card>

              <Card variant="shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What information should I include in my message?
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your project goals, timeline, and any specific
                    challenges you're facing. The more details you provide, the
                    better we can help.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Prefer to Explore First?
            </h2>
            <p className="text-xl text-primary-100">
              Check out our experience and services to learn more about what we
              can do for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/experience">View Experience</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary-900"
                asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
