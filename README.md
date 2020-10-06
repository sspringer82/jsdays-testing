# JSTesting

## Links

- Frameworks
  - Jest: https://jestjs.io/ - bringt alles mit incl Infrastruktur
  - Jasmine: https://jasmine.github.io/ - Testrunner ohne Infrastruktur
  - Mocha: https://mochajs.org/ - Testrunner ohne Assertionlibrary und ohne Infrastruktur
  - Karma (Infrastruktur): https://karma-runner.github.io/
  - Vergleich: https://www.npmtrends.com/jest-vs-mocha-vs-jasmine-core

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
