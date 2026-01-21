import { useEffect } from 'react';
import { type SEOProps } from '../types';
import { generateMetaTags } from '../utils/seo';

export const useSEO = (seoProps: SEOProps = {}) => {
  useEffect(() => {
    const metaTags = generateMetaTags(seoProps);
    
    // Update document title
    document.title = metaTags.title;
    
    // Update meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (name === 'title') return;
      
      let selector = `meta[name="${name}"]`;
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        selector = `meta[property="${name}"]`;
      }
      
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (metaTag) {
        metaTag.content = content || '';
      } else {
        metaTag = document.createElement('meta');
        const attribute = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
        metaTag.setAttribute(attribute, name);
        metaTag.content = content || '';
        document.head.appendChild(metaTag);
      }
    });
  }, [seoProps]);
};