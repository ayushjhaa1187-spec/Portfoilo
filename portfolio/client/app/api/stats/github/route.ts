import { NextResponse } from 'next/server';
import { stats as statsConfig } from '@/data/stats';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = process.env.GITHUB_USERNAME || statsConfig.githubUsername;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('GITHUB_TOKEN not found in environment. Using fallback stats.');
    return NextResponse.json(statsConfig.fallbackStats);
  }

  try {
    const headers = {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    };

    // ⚡ Bolt Optimization: Fetch user and repo data concurrently to reduce network latency
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers, next: { revalidate: 3600 } })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error('GitHub API responded with error');
    }

    const [userData, reposData] = await Promise.all([
      userRes.json(),
      reposRes.json()
    ]);

    const stars = reposData.reduce((acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count, 0);
    const repos = reposData.length;
    const followers = userData.followers;

    return NextResponse.json({
      repos,
      stars,
      followers,
    });
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return NextResponse.json(statsConfig.fallbackStats);
  }
}
