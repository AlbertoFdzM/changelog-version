# Changelog Version

[![Greenkeeper badge](https://badges.greenkeeper.io/AlbertoFdzM/changelog-version.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/AlbertoFdzM/changelog-version.svg?branch=master)](https://travis-ci.org/AlbertoFdzM/changelog-version) [![codecov.io](https://codecov.io/github/AlbertoFdzM/changelog-version/coverage.svg?branch=master)](https://codecov.io/github/AlbertoFdzM/changelog-version?branch=master) [![bitHound Overall Score](https://www.bithound.io/github/AlbertoFdzM/changelog-version/badges/score.svg)](https://www.bithound.io/github/AlbertoFdzM/changelog-version)
[![Dependency Status](https://gemnasium.com/badges/github.com/AlbertoFdzM/changelog-version.svg)](https://gemnasium.com/github.com/AlbertoFdzM/changelog-version)

[![NPM](https://nodei.co/npm/changelog-version.png)](https://nodei.co/npm/changelog-version/)

Build tool to update CHANGELOG.md file with the version number.

## Example of use

Having the next files on your project.

`package.json`
```json
{
  "name": "awesome-tool",
  "version": "1.0.0",
  "description": "The Awesome Tool"
}
```

`CHANGELOG.md`
```markdown
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!--
## [UNRELEASED]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

## [UNRELEASED]
### Added
- My super fancy feature
```

When executing the next line in the terminal:
```bash
changelog-version
```

The `CHANGELOG.md` file will be updated to:
```markdown
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!--
## [UNRELEASED]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

## 2049-02-29 - v1.0.0
### Added
- My super fancy feature
```

## license

MIT
