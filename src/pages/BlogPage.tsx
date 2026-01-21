import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Card, CardContent, Button } from '../components/ui';

export const BlogPage = () => {
  useSEO({
    title: 'Blog',
    description: 'Read the latest insights, tips, and industry updates from Constellation Sonoma. Stay informed about business technology, digital transformation, and best practices.',
    keywords: ['blog', 'articles', 'insights', 'technology', 'business tips', 'industry news'],
  });

  const posts = [
    {
      title: '10 Ways to Accelerate Your Digital Transformation',
      excerpt: 'Discover proven strategies to successfully navigate your digital transformation journey and achieve measurable results quickly.',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      category: 'Digital Transformation',
      readTime: '5 min read',
    },
    {
      title: 'The Future of AI in Business Operations',
      excerpt: 'Explore how artificial intelligence is reshaping business operations and what it means for your organization.',
      date: '2024-01-10',
      author: 'Michael Chen',
      category: 'Technology',
      readTime: '7 min read',
    },
    {
      title: 'Building Scalable Web Applications: Best Practices',
      excerpt: 'Learn the essential principles and patterns for building web applications that grow with your business.',
      date: '2024-01-05',
      author: 'Emily Rodriguez',
      category: 'Development',
      readTime: '6 min read',
    },
    {
      title: 'Customer Experience: The Key to Business Growth',
      excerpt: 'Understand why customer experience is the new competitive advantage and how to optimize it.',
      date: '2023-12-28',
      author: 'David Park',
      category: 'Strategy',
      readTime: '4 min read',
    },
    {
      title: 'Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Navigate your cloud migration journey with confidence using our comprehensive guide and proven framework.',
      date: '2023-12-20',
      author: 'Michael Chen',
      category: 'Technology',
      readTime: '8 min read',
    },
    {
      title: 'Design Systems: Creating Consistent User Experiences',
      excerpt: 'Discover how design systems can streamline your development process and create cohesive user experiences.',
      date: '2023-12-15',
      author: 'Emily Rodriguez',
      category: 'Design',
      readTime: '5 min read',
    },
  ];

  const categories = ['All', 'Digital Transformation', 'Technology', 'Development', 'Strategy', 'Design'];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Our
              <span className="text-primary-200 block">Blog</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Insights, tips, and industry updates to help you stay ahead in the ever-evolving
              world of business and technology.
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} variant="shadow" className="group hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-primary-600 font-medium">{post.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">{post.readTime}</div>

                  <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-primary-100">
              Get the latest insights and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
