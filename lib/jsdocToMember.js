const doctrine = require('doctrine')
const getJsdocAstTag = require('./getJsdocAstTag')
const deconstructJsdocNamepath = require('./deconstructJsdocNamepath')

/**
 * Converts a Doctrine JSDoc comment string to an outline member object.
 * @kind function
 * @name jsdocToMember
 * @param {string} jsdoc JSDoc comment string.
 * @returns {Object|void} Outline member, if it is one.
 * @ignore
 */
const jsdocToMember = jsdoc => {
  const jsdocAst = doctrine.parse(jsdoc, { unwrap: true, sloppy: true })

  // Exclude ignored symbol.
  if (getJsdocAstTag(jsdocAst.tags, 'ignore')) return

  const { kind } = getJsdocAstTag(jsdocAst.tags, 'kind') || {}
  // Ignore symbol without a kind.
  if (!kind) return

  const { name: namepath } = getJsdocAstTag(jsdocAst.tags, 'name') || {}
  // Ignore symbol without a name.
  if (!namepath) return

  return {
    kind,
    namepath,
    ...deconstructJsdocNamepath(namepath),
    ...jsdocAst
  }
}

module.exports = jsdocToMember