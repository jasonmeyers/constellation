# Constellation Sonoma - Marketing Website

A modern, responsive marketing and conversion-focused website built with the latest React technologies.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 
- **Routing**: TanStack Router (file-based routing)
- **State Management**: TanStack Query (React Query)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── forms/        # Form components
├── pages/            # Page components
├── routes/           # TanStack Router route definitions
├── hooks/            # Custom React hooks
├── services/         # API services and data fetching
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── styles/           # Global styles and Tailwind config
```

## 📄 Pages

- **Home** (`/`) - Hero section, features, testimonials, and CTA
- **Services** (`/services`) - Service offerings with pricing and features
- **Experience** (`/experience`) - Professional experience and case studies
- **About** (`/about`) - Company story, team, values, and mission
- **Portfolio** (`/portfolio`) - Project showcase and success stories
- **Blog** (`/blog`) - Articles and insights
- **Contact** (`/contact`) - Contact form and company information

## 🎨 Component Library

### UI Components
- **Button** - Styled button with variants (primary, secondary, outline, ghost)
- **Card** - Container component with header, title, and content
- **Input** - Form input with label and error handling
- **Textarea** - Multi-line text input

### Layout Components
- **Header** - Navigation with responsive mobile menu
- **Footer** - Company info, links, and newsletter signup
- **Layout** - Main layout wrapper

### Form Components
- **ContactForm** - Complete contact form with validation

## 🔧 Features

### SEO Optimization
- Custom SEO hook for meta tags
- Dynamic page titles and descriptions
- Open Graph and Twitter Card support
- Structured metadata for all pages

### Performance
- File-based routing with code splitting
- Optimized images and assets
- Lazy loading and prefetching
- Efficient bundle sizes

### Developer Experience
- TypeScript for type safety
- ESLint for code quality
- File-based routing
- Hot module replacement
- Comprehensive error handling

### Responsive Design
- Mobile-first approach
- Responsive navigation
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

### Branding
Update the following files to customize branding:
- `src/utils/seo.ts` - Default SEO settings
- `src/components/layout/Header.tsx` - Logo and navigation
- `src/components/layout/Footer.tsx` - Company information
- `tailwind.config.js` - Color scheme and design tokens

### Content
Update page content in:
- `src/pages/` - All page components
- `src/services/api.ts` - Mock data for services, blog posts, etc.

### Styling
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and Tailwind directives

## 🔌 API Integration

The project includes mock API services in `src/services/api.ts`. To integrate with real APIs:

1. Replace mock functions with actual API calls
2. Update TypeScript types in `src/types/`
3. Configure environment variables for API endpoints
4. Add authentication if required

### Example API Integration

```typescript
// src/services/api.ts
export const apiService = {
  getBlogPosts: async (): Promise<BlogPost[]> => {
    const response = await fetch('/api/blog-posts');
    return response.json();
  },
  // ... other API methods
};
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact: info@constellationsonoma.com

## 🔮 Future Enhancements

- [ ] Blog with CMS integration
- [ ] Client portal/dashboard
- [ ] Real-time chat support
- [ ] A/B testing framework
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Progressive Web App features
- [ ] Advanced SEO optimizations
