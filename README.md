# Emeric Molère

Personal portfolio website for Emeric Molère, DevOps Engineer.

[Visit the website](https://ehngmolere.github.io)

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Quick start

Install the dependencies and start the local development server:

```bash
npm install
npm run serve
```

The application is then available at `http://localhost:8080`.

## Project commands

| Command | Description |
| --- | --- |
| `npm run serve` | Start the development server with hot reload. |
| `npm run build` | Compile and minify the production build. |
| `npm run lint` | Run ESLint. |
| `npm run deploy` | Build and publish the `dist/` directory to GitHub Pages. |

## Deployment

The deployment command publishes the `dist/` directory to the `gh-pages` branch:

```bash
npm run deploy
```

In the repository settings, configure GitHub Pages to deploy from the `gh-pages` branch and the `/ (root)` directory.

## Libraries

- [Bootstrap](https://getbootstrap.com/) provides the layout and utility styles.
- [Devicon](https://devicon.dev) provides technology icons.
- [Font Awesome](https://fontawesome.com) provides interface icons.

See the [Vue CLI configuration reference](https://cli.vuejs.org/config/) for project configuration options.