const black = '#000'
const red = '#f92672'
const green = '#82b414'
const yellow = '#fd971f'
const blue = '#56c2d6'
const magenta = '#8c54fe'
const cyan = '#c1edf6'
const white = '#cccbc6'
const bblack = '#505354'
const bred = '#fc5995'
const bgreen = '#b6e354'
const byellow = '#feed6c'
const bblue = '#8cedff'
const bmagenta = '#9e6ffe'
const bcyan = '#899ca1'
const bwhite = '#f8f8f2'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: black,
    foregroundColor: '#a0a0a0',
    borderColor: black,
    cursorColor: '#fff',
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,

      // bright
      bblack,
      bred,
      bgreen,
      byellow,
      bblue,
      bmagenta,
      bcyan,
      bwhite
    ],
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        opacity: 0.6 !important;
      }
    `
  })
}
