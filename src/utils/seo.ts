import { type SEOProps } from '../types';

export const defaultSEO: SEOProps = {
  title: 'Constellation Sonoma | Professional Services & Solutions',
  description: 'Leading provider of innovative professional services and solutions. Transform your business with our expert team and cutting-edge approaches.',
  keywords: ['professional services', 'business solutions', 'consulting', 'innovation'],
  image: '/og-image.jpg',
  url: 'https://constellationsonoma.com'
};

export const generatePageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return defaultSEO.title!;
  return `${pageTitle} | Constellation Sonoma`;
};

export const generateMetaTags = (seoProps: SEOProps = {}) => {
  const seo = { ...defaultSEO, ...seoProps };
  
  return {
    title: generatePageTitle(seoProps.title),
    description: seo.description,
    keywords: seo.keywords?.join(', '),
    'og:title': generatePageTitle(seoProps.title),
    'og:description': seo.description,
    'og:image': seo.image,
    'og:url': seo.url,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': generatePageTitle(seoProps.title),
    'twitter:description': seo.description,
    'twitter:image': seo.image,
  };
};