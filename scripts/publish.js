const { spawnSync } = require('node:child_process');

if (process.env.GITHUB_ACTIONS !== 'true') {
  console.error('Publishing is only available through GitHub Actions.');
  process.exit(1);
}

const build = spawnSync('npm', ['run', 'build'], { stdio: 'inherit' });

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const publish = spawnSync('npx', ['gh-pages', '-d', 'dist'], { stdio: 'inherit' });
process.exit(publish.status ?? 1);