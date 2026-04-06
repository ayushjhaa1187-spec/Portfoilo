import { Project } from '@/data/projects';

export interface SearchOptions {
  query: string;
  category: string;
  sortBy: 'recent' | 'accuracy' | 'complexity' | 'featured';
}

type ScoredProject = {
  project: Project;
  score: number;
};

export function searchProjects(projects: Project[], opts: SearchOptions): Project[] {
  let results = [...projects];

  if (opts.query.trim()) {
    const tokens = opts.query.toLowerCase().trim().split(/\s+/);

    results = results
      .map((project): ScoredProject => ({
        project,
        score: tokens.reduce((acc, token) => (
          acc +
          (project.title.toLowerCase().includes(token) ? 3 : 0) +
          (project.shortDescription.toLowerCase().includes(token) ? 2 : 0) +
          (project.techStack.some((tech) => tech.toLowerCase().includes(token)) ? 1 : 0)
        ), 0)
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.project);
  }

  if (opts.category !== 'ALL') {
    results = results.filter((project) => {
      const normalizedCategory = project.category.toUpperCase().replace(/\s+/g, '-');
      return normalizedCategory === opts.category;
    });
  }

  switch (opts.sortBy) {
    case 'featured':
      return [...results].sort((a, b) => Number(b.featured) - Number(a.featured));
    case 'accuracy':
      return [...results].sort((a, b) =>
        parseFloat((b.metrics.accuracy || '0').replace(/[^\d.]/g, '')) -
        parseFloat((a.metrics.accuracy || '0').replace(/[^\d.]/g, ''))
      );
    case 'complexity':
      return [...results].sort((a, b) => b.techStack.length - a.techStack.length);
    case 'recent':
    default:
      return results;
  }
}
