# babel-preset-travi

[![Greenkeeper badge](https://badges.greenkeeper.io/travi/babel-preset-travi.svg)](https://greenkeeper.io/)

My shareable babel preset

<!-- status badges -->
[![Build Status][ci-badge]][ci-link]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


* [Usage](#usage)
  * [Installation](#installation)
  * [Via `.babelrc` for internal development purposes](#via-babelrc-for-internal-development-purposes)
    * [In React projects](#in-react-projects)
* [Contribution](#contribution)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

<!-- consumer badges -->
[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

### Installation

```sh
$ npm install babel-preset-travi --save-dev
```

### Via `.babelrc` for internal development purposes

This will target the current version of node and transpile my preferred upcoming
features.

```json
{
  "presets": ["travi"]
}
```

#### In React projects

This will target the current node version, but will also transpile React features

```json
{
  "presets": [["travi", {"react": true}]]
}
```

## Contribution

<!-- contribution badges -->
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/babel-preset-travi
[npm-badge]: https://img.shields.io/npm/v/babel-preset-travi.svg
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/travi/babel-preset-travi.svg
[ci-link]: https://travis-ci.org/travi/babel-preset-travi
[ci-badge]: https://img.shields.io/travis/travi/babel-preset-travi.svg?branch=master
