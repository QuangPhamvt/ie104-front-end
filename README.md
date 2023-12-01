# FRONTEND for IE104 Project

## About The Project

This is Project Web IE104. I hope it can help you sometime in the future. So when u clone my project, pleas gift me 1 star.

**Yeah!! HAVE A GOOD DAY**

### Built With

- [React][React-url]
- [Vite][Vite-url]
- [Sass/Scss][Sass-url]
- [Recoil][Recoil-url]
- [AWS][AWS-url]
- [Nginx][Nginx-url]

## Prerequires

- Nodejs version >= v16.20.1

## Getting Started

### Installation

1. Clone the repo

```bash
git clone git@github.com:QuangPhamvt/ie104-front-end.git
```

2. Install yarn packages

- Client

```bash
$ cd ./ie104-front-end
$ yarn install
```

3. Config environment

- Setup Client
  > file .env in folder client

```
VITE_API_URL="http://localhost:3000/api/v1" #connect to server
```
4. Prepare
- Config husky
```
yarn prepare
```

### Usage

- Run Client

```bash
$ cd ./ie104-front-end
$ yarn run dev
```

## Information

### Client

- Feature
  - /Dashboard -> show home page
  - /search -> search product to order
  - /history -> show history order
  - /seller -> just use for seller, you can see all information product detail
  - /signup/redirect -> use for redirect to email
  - /signup/token -> get token to sign up
  - /* -> not found page
  - Login | Logout | Register for user
- Package using

```
  "dependencies": {
    "axios": "^1.5.1",
    "dayjs": "^1.11.10",
    "jwt-decode": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-loader-spinner": "^5.4.5",
    "react-router-dom": "^6.18.0",
    "recoil": "^0.7.7",
    "vite-plugin-svgr": "^4.1.0"
  },
  "devDependencies": {
    "@commitlint/cli": "^17.7.2",
    "@commitlint/config-conventional": "^17.7.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3",
    "sass": "^1.69.5",
    "vite": "^4.4.5"
  },
```

### Technology

## Link Demo

link: [https://fe.ie104.customafk.com](http://fe.ie104.customafk.com/)

## How to push

- Role commit
  `{type}: {subject}`
  - type: build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test
  - subject: 'Write a short, imperative tense description of the change'
- Automatic: check lint and format pre-commit

- Example:

```bash
git commit -m "{type}: {subject}"
```

Description
|**Types**| **Description** |
|:---| :--- |
|feat| A new feature|
|fix| A bug fix|
|docs| Documentation only changes|
|style| Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
|refactor| A code change that neither fixes a bug nor adds a feature |
|perf| A code change that improves performance |
|test| Adding missing tests or correcting existing tests |
|build| Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) |
|ci| 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|chore| Other changes that don't modify src or test files |
|revert| Reverts a previous commit |

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-url]: https://react.dev/
[Vite-url]: https://vitejs.dev/
[Sass-url]: https://sass-lang.com/documentation/style-rules/declarations/
[AWS-url]: https://aws.amazon.com/
[Recoil-url]: https://recoiljs.org/
[Nginx-url]: https://www.nginx.com/
