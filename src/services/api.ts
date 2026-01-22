// Mock API service for demonstration
// In a real application, these would be actual API calls

import { type BlogPost, type ContactForm, type Service } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock services data
const mockServices: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    features: ['React/Next.js', 'Full-stack development', 'API integration'],
    price: 'Starting at $5,000'
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered designs that convert',
    features: ['User research', 'Wireframing', 'Visual design'],
    price: 'Starting at $3,000'
  }
];

// Mock blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and trends in 2024',
    content: 'Full blog post content...',
    author: 'Michael Chen',
    publishDate: '2024-01-15',
    tags: ['Web Development', 'Trends'],
    slug: 'future-web-development-2024',
    featured: true
  }
];

export const apiService = {
  // Blog API
  getBlogPosts: async (): Promise<BlogPost[]> => {
    await delay(500);
    return mockBlogPosts;
  },

  getBlogPost: async (slug: string): Promise<BlogPost | null> => {
    await delay(300);
    return mockBlogPosts.find(post => post.slug === slug) || null;
  },

  // Services API
  getServices: async (): Promise<Service[]> => {
    await delay(400);
    return mockServices;
  },

  getService: async (id: string): Promise<Service | null> => {
    await delay(300);
    return mockServices.find(service => service.id === id) || null;
  },

  // Contact API
  submitContactForm: async (data: ContactForm): Promise<{ success: boolean; message: string }> => {
    await delay(1000);
    
    // Simulate validation
    if (!data.name || !data.email || !data.message) {
      throw new Error('Missing required fields');
    }

    // Simulate success response
    return {
      success: true,
      message: 'Thank you for your message. We\'ll get back to you within 24 hours.'
    };
  },

  // Newsletter API
  subscribeToNewsletter: async (email: string): Promise<{ success: boolean; message: string }> => {
    await delay(800);
    
    if (!email || !email.includes('@')) {
      throw new Error('Please provide a valid email address');
    }

    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    };
  },

  // Analytics API (for dashboard/admin features)
  getAnalytics: async (): Promise<any> => {
    await delay(600);
    return {
      pageViews: 15420,
      uniqueVisitors: 8930,
      conversions: 234,
      bounceRate: 0.23
    };
  }
};