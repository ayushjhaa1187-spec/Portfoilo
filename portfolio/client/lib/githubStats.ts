// portfolio/client/lib/githubStats.ts

export async function getGitHubStats(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: process.env.GITHUB_TOKEN ? { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } : {},
      next: { revalidate: 3600 } // Revalidate hourly
    });
    
    if (!res.ok) throw new Error('GitHub user fetch failed');
    const user = await res.json();
    
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: process.env.GITHUB_TOKEN ? { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } : {},
      next: { revalidate: 3600 }
    });
    
    if (!reposRes.ok) throw new Error('GitHub repos fetch failed');
    const repos = await reposRes.json();
    
    return {
      publicRepos: user.public_repos || 46,
      followers: user.followers || 0,
      totalStars: repos.reduce((acc: number, r: any) => acc + (r.stargazers_count || 0), 0),
      joinYear: new Date(user.created_at).getFullYear() || 2024
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      publicRepos: 46,
      followers: 12,
      totalStars: 5,
      joinYear: 2024
    };
  }
}
