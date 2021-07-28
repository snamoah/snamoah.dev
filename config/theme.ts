enum colors {
  PRIMARY = '#7366FF',
  BLACK = '#1F2126',

  /* Grey */
  LIGHTER_GREY = '#F2F4F7',
  LIGHT_GREY = '#EBEDF2',
  GREY = '#C4C4C4',
  DARK_GREY = '#959BA6',
  DARKER_GREY = '#4C5059',
}

const theme = {
  colors,
} as const

export default theme
