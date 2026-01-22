import { useQuery, useMutation } from '@tanstack/react-query';
import { apiService } from '../services/api';
import { type ContactForm } from '../types';

// Query keys for caching
export const queryKeys = {
  blogPosts: 'blogPosts',
  blogPost: (slug: string) => ['blogPost', slug],
  services: 'services',
  service: (id: string) => ['service', id],
} as const;

// Blog hooks
export const useBlogPosts = () => {
  return useQuery({
    queryKey: [queryKeys.blogPosts],
    queryFn: apiService.getBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.blogPost(slug),
    queryFn: () => apiService.getBlogPost(slug),
    enabled: !!slug,
  });
};

// Services hooks
export const useServices = () => {
  return useQuery({
    queryKey: [queryKeys.services],
    queryFn: apiService.getServices,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useService = (id: string) => {
  return useQuery({
    queryKey: queryKeys.service(id),
    queryFn: () => apiService.getService(id),
    enabled: !!id,
  });
};

// Contact form mutation
export const useContactForm = () => {

  return useMutation({
    mutationFn: (data: ContactForm) => apiService.submitContactForm(data),
    onSuccess: () => {
      // Could invalidate any relevant queries here
      console.log('Contact form submitted successfully');
    },
    onError: (error) => {
      console.error('Contact form submission error:', error);
    },
  });
};

// Newsletter subscription mutation
export const useNewsletterSubscription = () => {
  return useMutation({
    mutationFn: (email: string) => apiService.subscribeToNewsletter(email),
    onSuccess: () => {
      console.log('Newsletter subscription successful');
    },
    onError: (error) => {
      console.error('Newsletter subscription error:', error);
    },
  });
};