const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'ayushjhaa1187-spec';
const PORTFOLIO_DATA_PATH = path.join(__dirname, '../portfolio/client/data/portfolio.ts');

async function syncGithub() {
    console.log(`🚀 Syncing GitHub data for ${GITHUB_USERNAME}...`);

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch from GitHub');
        const repos = await response.json();

        console.log(`📦 Found ${repos.length} repositories.`);

        let content = fs.readFileSync(PORTFOLIO_DATA_PATH, 'utf8');

        // Simple regex-based update for stars/stats if we had them in the file
        // But since the structure is complex, we should ideally parse it.
        // For now, let's update the 'stats' array in the file.

        const publicRepos = repos.length;
        // You'd need a token for total contributions, but we can update repo count easily.

        content = content.replace(
            /\{ label: 'Open Source Projects', value: '.*?', description: 'GitHub Repos' \}/,
            `{ label: 'Open Source Projects', value: '${publicRepos}+', description: 'GitHub Repos' }`
        );

        fs.writeFileSync(PORTFOLIO_DATA_PATH, content);
        console.log('✅ Updated portfolio.ts with latest GitHub stats.');

    } catch (error) {
        console.error('❌ Error syncing GitHub:', error);
    }
}

syncGithub();
