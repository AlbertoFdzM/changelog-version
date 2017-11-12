/* eslint-env mocha */
const chai = require('chai')
const expect = chai.expect
const fs = require('fs-extra')
const path = require('path')
const changelogVersion = require('../')

const originCWD = process.cwd()
const tempPath = path.join(__dirname, '../tmp')

const readChangelog = function () {
  return fs.readFileSync(path.join(tempPath, 'CHANGELOG.md'), 'utf8')
}

describe('changelog-version', () => {
  before(() => {
    fs.emptyDirSync(tempPath)
  })

  after(() => {
    fs.removeSync(tempPath)
  })

  it('should update CHANGELOG file with the pckage version', () => {
    fs.copySync(path.join(__dirname, 'scenarios/01'), path.join(tempPath))

    const pkg = require(path.join(tempPath, 'package.json'))
    let data = readChangelog()

    expect(data.toString()).to.not.have.string(pkg.version)

    process.chdir(tempPath)
    changelogVersion()
    process.chdir(originCWD)

    data = readChangelog()

    expect(data.toString()).to.have.string(pkg.version)
  })
})
