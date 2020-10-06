# JSTesting

## Links

- Frameworks
  - Jest: https://jestjs.io/ - bringt alles mit incl Infrastruktur
  - Jasmine: https://jasmine.github.io/ - Testrunner ohne Infrastruktur
  - Mocha: https://mochajs.org/ - Testrunner ohne Assertionlibrary und ohne Infrastruktur
  - Karma (Infrastruktur): https://karma-runner.github.io/
- Vergleich: https://www.npmtrends.com/jest-vs-mocha-vs-jasmine-core
- Katas: https://github.com/sspringer82/katas
- Coding Challenges: https://github.com/sspringer82/programmingChallenges
- Server Mocks:
  - https://www.npmjs.com/package/fetch-mock
  - https://www.npmjs.com/package/axios-mock-adapter
- API testing mit Supertest: https://github.com/visionmedia/supertest
- Angular Testing: https://angular.io/guide/testing
- Testing Library: https://testing-library.com/docs/intro
- React:
  - Enzyme: https://github.com/enzymejs/enzyme
  - React Testing Library: https://testing-library.com/docs/react-testing-library/intro

## Karma/Jasmine

### Getting started:

Installation: `npm install --save-dev karma karma-jasmine karma-chrome-launcher jasmine-core`
Konfiguration: `npx karma init`
Ausführung:

1. npm i -g karma-cli => karma start
2. npx karma start
3. package.json > scripts > karma > auf der CLI `npm run karma`

### Quick Start

1. Sourcecode organisieren (entweder clone oder download)
2. `npm install` - im Wurzelverzeichnis des Projekts
3. `npm run karma` - im Wurzelverzeichnis des Projekts

## Jasmine

- fit/fdescribe => nur den aktuellen Test ausführen
- xit/xdescribe => skippt den aktuellen Test
