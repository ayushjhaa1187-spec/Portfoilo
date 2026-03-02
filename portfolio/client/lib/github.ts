/**
 * GitHub API Utility
 * Fetches repository data, contribution stats, etc.
 */

const GITHUB_USERNAME = 'ayushjhaa1187-spec';

export interface GithubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('Failed to fetch repos');
        }

        return await response.ok ? await response.json() : [];
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

export async function getGithubStats() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user stats');
        }

        const data = await response.json();
        return {
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following,
            avatarUrl: data.avatar_url,
        };
    } catch (error) {
        console.error('Error fetching GitHub user stats:', error);
        return null;
    }
}
