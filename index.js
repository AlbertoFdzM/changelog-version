'use strict'

const fs = require('fs')
const path = require('path')

const regexp = /(\n+)(?!<!--)(\n)(## )(\[UNRELEASED])/gi
const date = new Date().toISOString().replace(/T.*/, '')

const changelogVersion = function (changelogPath) {
  const pkgInfo = require(path.join(process.cwd(), 'package.json'))
  const version = 'v' + pkgInfo.version
  changelogPath = changelogPath || path.join(process.cwd(), 'CHANGELOG.md')

  let data = fs.readFileSync(changelogPath, 'utf8')

  data = data.replace(regexp, `$1$2$3${version} - ${date}`)

  fs.writeFileSync(changelogPath, data, 'utf8')
}

module.exports = changelogVersion
