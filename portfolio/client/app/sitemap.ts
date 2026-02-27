import { MetadataRoute } from 'next';
import { projects, caseStudies, blogPosts } from '@/data/portfolio';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayushjha.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/skills',
        '/education',
        '/achievements',
        '/experience',
        '/projects',
        '/blog',
        '/case-studies',
        '/research',
        '/resume',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes, ...caseStudyRoutes, ...blogRoutes];
}
