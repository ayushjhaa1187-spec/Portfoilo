import { NextResponse } from 'next/server';

const USERNAME = 'ayushjhaa1187-spec';

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        },
        next: { revalidate: 3600 }
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        },
        next: { revalidate: 3600 }
      })
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API failed');

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((acc: number, r: { stargazers_count?: number }) => acc + (r.stargazers_count || 0), 0)
      : 0;

    const languages = Array.isArray(repos)
      ? [...new Set(repos.map((r: { language?: string | null }) => r.language).filter(Boolean))]
      : [];

    return NextResponse.json(
      {
        publicRepos: user.public_repos || 0,
        followers: user.followers || 0,
        totalStars,
        topLanguages: languages.slice(0, 8),
        updatedAt: new Date().toISOString()
      },
      {
        headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' }
      }
    );
  } catch {
    return NextResponse.json({
      publicRepos: 46,
      followers: 0,
      totalStars: 0,
      topLanguages: ['TypeScript', 'Python', 'JavaScript'],
      updatedAt: null,
      cached: true
    });
  }
}
