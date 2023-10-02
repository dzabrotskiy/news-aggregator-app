# Best News Aggregator [Test App]

# App built with
1. `React`
2. `TypeScript`
3. `NextJS` (app router)
4. `NextUI`
5. `React-Query`
6. `Styled-Components`
7. `Tailwind CSS`
8. `Zustand`

# How to run
Project is using `npm`.
### Locally
```shell
# Install deps
$ npm install
# run the app
$ npm run dev
```

### Using Docker
Dockerfile is located in root directory
```shell
# Build docker image
$ docker build -t bna-app .
# Run docker comtainer
$ docker run --name bna-container -p 3000:3000 -d bna-app
```

# Used news sources
1. `The Guardian`
2. `New York Times`
3. `NewsAPI org`

# Env
Env is reading from .env file which stored locally in project

Also, it's possible to provide env through Docker ENV on build stage

```dotenv
NEWS_API_ORG_API_KEY=
THE_GUARDIAN_API_KEY=
NY_TIMES_API_KEY=
```

# Notes
Some important notes about app and integrations:
1. Some APIs don't have searching by authors and categories
