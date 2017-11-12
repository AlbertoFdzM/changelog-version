const fs = require('fs')
const path = require('path')
const pkgInfo = require('./package.json')

const regexp = /(\n+)(?!<!--)(\n)(## )(\[UNRELEASED])/gi
const version = 'v' + pkgInfo.version
const date = new Date().toISOString().replace(/T.*/, '')

const changelogVersion = function (changelogPath) {
  changelogPath = changelogPath || path.join(process.cwd(), 'CHANGELOG.md')

  let data = fs.readFileSync(changelogPath, 'utf8')

  data = data.replace(regexp, `$1$2$3${version} - ${date}`)

  fs.writeFileSync(changelogPath, data, 'utf8')
}

module.exports = changelogVersion
