export const revalidate = 3600;

interface GithubRepo {
  stargazers_count: number;
  language: string | null;
}

interface GithubEvent {
  type: string;
  payload?: {
    commits?: Array<unknown>;
  };
}

const GITHUB_USER = 'ayushjhaa1187-spec';

function calculateTopLanguages(repos: GithubRepo[]) {
  const languageFrequency = repos.reduce<Record<string, number>>((acc, repo) => {
    if (!repo.language) return acc;
    acc[repo.language] = (acc[repo.language] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(languageFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));
}

export async function GET() {
  const headers: HeadersInit = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [userRes, reposRes, eventsRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USER}`, { next: { revalidate }, headers }),
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, { next: { revalidate }, headers }),
    fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=100`, { next: { revalidate }, headers })
  ]);

  if (!userRes.ok || !reposRes.ok || !eventsRes.ok) {
    return Response.json(
      {
        error: 'Unable to fetch GitHub stats right now.',
        repos: 0,
        stars: 0,
        followers: 0,
        recentCommits: 0,
        topLanguages: [],
        lastUpdated: new Date().toISOString()
      },
      {
        status: 500,
        headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=600' }
      }
    );
  }

  const [user, repos, events] = await Promise.all([
    userRes.json(),
    reposRes.json() as Promise<GithubRepo[]>,
    eventsRes.json() as Promise<GithubEvent[]>
  ]);

  const commitCount = events
    .filter((event) => event.type === 'PushEvent')
    .reduce((acc, event) => acc + (event.payload?.commits?.length || 0), 0);

  const stats = {
    repos: user.public_repos,
    stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
    followers: user.followers,
    recentCommits: commitCount,
    topLanguages: calculateTopLanguages(repos),
    lastUpdated: new Date().toISOString()
  };

  return Response.json(stats, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=7200' }
  });
}
