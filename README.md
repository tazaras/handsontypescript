
# TypeScript

[![CI](https://github.com/microsoft/TypeScript/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/TypeScript/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/microsoft/TypeScript/badge)](https://securityscorecards.dev/viewer/?uri=github.com/microsoft/TypeScript)


[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescript).

Find others who are using TypeScript at [our community page](https://www.typescriptlang.org/community/).

## Installing

For the latest stable version:

```bash
npm install -D typescript
```

For our nightly builds:

```bash
npm install -D typescript@next
```

## Contribute

There are many ways to [contribute](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md) to TypeScript.
* [Submit bugs](https://github.com/microsoft/TypeScript/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/microsoft/TypeScript/pulls).
* Engage with other TypeScript users and developers on [StackOverflow](https://stackoverflow.com/questions/tagged/typescript).
* Help each other in the [TypeScript Community Discord](https://discord.gg/typescript).
* Join the [#typescript](https://twitter.com/search?q=%23TypeScript) discussion on Twitter.
* [Contribute bug fixes](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see
the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com)
with any additional questions or comments.

## Documentation

*  [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
*  [Programming handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
*  [Homepage](https://www.typescriptlang.org/)

## Roadmap

For details on our planned features and future direction, please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).

# Komate installation guide

# Fullstack Development Setup Guide: VSCode, WSL Ubuntu, Node.js, TypeScript, React, Express & Database

This guide will walk you through installing and configuring Visual Studio Code (VSCode), Windows Subsystem for Linux (WSL) with Ubuntu, and setting up a fullstack JavaScript environment using Node.js, TypeScript, React, and Express. It concludes with the best database recommendation for modern JS fullstack development.

---

## 1. Install Visual Studio Code

1. Go to the [VSCode Download Page](https://code.visualstudio.com/).
2. Download the Windows installer.
3. Run the installer and follow prompts.
4. Once installed, launch VSCode.

### Recommended VSCode Extensions

- **ESLint** (for JavaScript/TypeScript linting)
- **Prettier** (for code formatting)
- **Bracket Pair Colorizer 2**
- **Docker** (if using containers)
- **Remote - WSL** (for WSL integration)
- **GitLens** (Git supercharged)

---

## 2. Set Up WSL (Windows Subsystem for Linux) with Ubuntu

1. **Enable WSL on Windows**
   - Open PowerShell as Administrator and run:
     ```powershell
     wsl --install
     ```
   - Restart your PC if prompted.

2. **Install Ubuntu from Microsoft Store**
   - Open Microsoft Store, search "Ubuntu" and choose the latest LTS version (e.g., Ubuntu 22.04 LTS).
   - Click “Get” and then “Install”.

3. **Initial Ubuntu Setup**
   - Launch Ubuntu from Start Menu.
   - Set up your UNIX username and password.

4. **Update Ubuntu packages**
   ```bash
   sudo apt update && sudo apt upgrade -y

## Install Node.js and npm
1. curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
2. sudo apt-get install -y nodejs

## Install TypeScript
- You can install TypeScript globally:
1. curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
2. sudo apt-get install -y nodejs
- Verify install:
1. node -v
2. npm -v

# Install TypeScript
- You can install TypeScript globally:
1. npm install -g typescript (others way to install : "npm install typescript@latest -g")
- Confirm installation:
1. tsc -v

# Install and Set Up React
1. Set up a new React project with TypeScript:
2. npx create-react-app my-app --template typescript
3. cd my-app

# Install Express for Backend
- Create your backend directory (e.g., server):

1. mkdir server
2. cd server
3. npm init -y
4. npm install express
5. npm install --save-dev typescript @types/express ts-node nodemon @types/node

- Initialize TypeScript in backend:
1. npx tsc --init

# Recommended Database Platform
## Best Recommendation for Fullstack JS:

PostgreSQL is the top choice for compatibility, features, and community support.
It works seamlessly with Node.js via libraries like pg and with ORMs like Prisma or TypeORM.
- Install PostgreSQL on Ubuntu WSL:
1. sudo apt update
2. sudo apt install postgresql postgresql-contrib

- Install PostgreSQL Node.js Driver in your backend:
1. npm install pg
2. (Optional) Install Prisma ORM:
3. npm install prisma --save-dev
4. npx prisma init

- Connecting VSCode to WSL
1. Open VSCode.
2. Click on the green button in the bottom left corner ("><").
3. Select "Remote-WSL: New Window".
4. Open your project folder inside WSL.

This ensures your development tools use the Linux environment—great for deployment compatibility!

- Additional Recommendations
1. Git: Install with sudo apt install git.
2. Docker Desktop (optional): Supports WSL for containerized databases/services.
3. Yarn: (optional, alternative to npm) npm install -g yarn
4. Environment Variables: Use .env files and the dotenv npm package.

## Generate Token key and Give permission to git remote machine
1. Click on your Profile Icon (top-right on Github website)
2. Settings
3. Developer settings (bottom-left)
4. Personal access tokens
5. fine-grained tokens
6. "Generate new token"
7. Write a Token name
8. Pick an expiration date from the menu or a custom one
9. Repository access> All repositories
10. Open "Repository permissions" menu
11. Look for the "Contents" row
12. From the menu at right select "Access> Read and Write"
13. "Generate token" (bottom-left)


