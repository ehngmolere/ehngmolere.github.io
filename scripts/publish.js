const { spawnSync } = require('node:child_process');

if (process.env.GITHUB_ACTIONS !== 'true') {
  console.error('Publishing is only available through GitHub Actions.');
  process.exit(1);
}

const { GITHUB_REPOSITORY, GITHUB_TOKEN } = process.env;

if (!GITHUB_REPOSITORY || !GITHUB_TOKEN) {
  console.error('GitHub repository and token are required for publishing.');
  process.exit(1);
}

const build = spawnSync('npm', ['run', 'build'], { stdio: 'inherit' });

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const commitMessage = spawnSync('git', ['log', '-1', '--pretty=%s'], {
  encoding: 'utf8',
}).stdout.trim();

if (!commitMessage) {
  console.error('Unable to determine the main branch commit message.');
  process.exit(1);
}

const repositoryUrl = `https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git`;
const publish = spawnSync('npx', [
  'gh-pages',
  '-d',
  'dist',
  '--repo',
  repositoryUrl,
  '--message',
  commitMessage,
], {
  stdio: 'inherit',
});
process.exit(publish.status ?? 1);