# DEMO

## About The Project

This is my code web blog. I'm using to internship in my company.

### Built With

- [React][Vue-url]
- [Vite][Vite-url]
- [Sass/Scss][Sass-url]

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


### Usage

- Run Client

```bash
$ cd ./ie104-front-end
$ yarn run dev
```


## Information

### Client

- Feature
  - /home -> show post list
  - /post/:id -> show blog to read
  - Login | Logout | Register for user
  - /post/new -> write blog for admin
- Package using

```
"dependencies": {
  "@reduxjs/toolkit": "^1.9.6",
  "axios": "^1.5.1",
  "dayjs": "^1.11.10",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-redux": "^8.1.2"
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
  "vite": "^4.4.5"
},
```


### Technology


## Link Demo
  link: https://ie104-front-end.vercel.app/
## How to push
- Role commit
  `{type}: {subject}`
  - type: build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test 
  - subject: 'Write a short, imperative tense description of the change'
- Automatic:  check lint and format pre-commit 
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-url]: https://react.dev/
[Vite-url]: https://vitejs.dev/guide/
[Nest-url]: https://nestjs.com/
[Sass-url]: https://sass-lang.com/documentation/style-rules/declarations/
[Mysql-url]: https://www.mysql.com/
[TypeORM-url]: https://typeorm.io/
