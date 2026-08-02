# Coin Pusher 3D - Casino Edition

[![Live Demo](https://img.shields.io/badge/Live%20Demo-PLAY%20NOW-ffd700?style=for-the-badge&logo=github&logoColor=black)](https://maxime-fleury.github.io/CoinU/)

A browser-based 3D coin pusher game built with **Three.js** and **Bun**.

## 🎮 Live Demo

Play the latest build on GitHub Pages:

**[https://maxime-fleury.github.io/CoinU/](https://maxime-fleury.github.io/CoinU/)**

The site is rebuilt and redeployed automatically on every push to `main` by the
[GitHub Actions workflow](.github/workflows/deploy.yml).

## Features

- 🪙 Real-time 3D coin pusher physics
- 💵 Coins and dollars currency system
- 🛒 Upgrade shop with persistent progression
- 👑 Prestige system with permanent bonuses
- 🌐 English / French language support
- 💾 Local save game storage

## Prerequisites

- [Bun](https://bun.sh) installed

## Install dependencies

```bash
bun install
```

## Development

Run the development server (serves on http://localhost:3001):

```bash
bun run dev
```

## Build

Bundle the source files for production:

```bash
bun run build
```

This outputs `dist/main.js`, which is referenced by `index.html`.

## Build and run

```bash
bun run start
```

## Controls

- **SPACE** or click the drop button to drop a coin/bill
- **1-9, 0** to buy upgrades
- Switch between Coins and Dollars with the toggle buttons
- Use the Shop / Prestige tabs to manage upgrades

## Project structure

```
.
├── index.html      # Main HTML page
├── server.js       # Bun static file server
├── src/            # Game source code
│   ├── main.js     # Entry point
│   ├── game.js     # Game state & logic
│   ├── coin.js     # Coin physics system
│   ├── platform.js # 3D platform/mechanism
│   ├── scene.js    # Three.js scene setup
│   ├── ui.js       # UI management
│   ├── upgrades.js # Upgrade definitions
│   ├── prestige.js # Prestige system
│   ├── save.js     # Save/load logic
│   ├── i18n.js     # Translations
│   └── style.css   # Styles
└── dist/           # Bundled output
    └── main.js
```
