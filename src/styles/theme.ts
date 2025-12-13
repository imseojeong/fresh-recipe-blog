const fontFamilies = {
  point: '"DotGothic16", sans-serif',
  main: '"Space Mono", monospace',
}
const colors = {
  yellow: '#FFFF77',
  orange: '#FFDF4E',
  red: '#CA1E08',
  darkRed: '#8E1606',
}
const breakpoints = {
  sm: '375px',
  md: '800px',
  lg: '1280px',
}
const textStyles = {
  heading1: {
    fontSize: '40px',
    lineHeight: '110%',
    letterSpacing: '-0.01em',
    fontFamily: fontFamilies.point,
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '60px',
      lineHeight: '115%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '80px',
    },
  },
  heading2: {
    fontSize: '35px',
    lineHeight: '90%',
    letterSpacing: '-0.03em',
    fontFamily: fontFamilies.point,
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '45px',
    },
  },
  paragraphLarge: {
    fontSize: '20px',
    lineHeight: '130%',
    letterSpacing: '-0.03em',
    fontFamily: fontFamilies.main,
  },
  paragraph1: {
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '-0.03em',
    fontFamily: fontFamilies.main,
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '14px',
      lineHeight: '140%',
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      fontSize: '16px',
      lineHeight: '135%',
    },
  },
  paragraph2: {
    fontSize: '14px',
    lineHeight: '90%',
    letterSpacing: '0.01em',
    fontFamily: fontFamilies.point,
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '16px',
    },
  },
  link: {
    fontSize: '14px',
    lineHeight: '120%',
    letterSpacing: '-0.03em',
    fontFamily: fontFamilies.main,
    textDecoration: 'underline',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '16px',
    },
  },
  caption: {
    fontSize: '13px',
    lineHeight: '120%',
    letterSpacing: '-0.03em',
    fontFamily: fontFamilies.main,
  },
}
const colorStyles = {
  background: {
    main: colors.yellow,
    secondary: colors.orange,
  },
  accent: {
    primary: colors.red,
  },
  text: {
    headline1: colors.yellow,
    headline2: colors.darkRed,
    body1: colors.darkRed,
    body2: colors.yellow,
  },
  dividers: {
    divider1: colors.red,
  },
}

export const theme = {
  fontFamilies,
  colors,
  breakpoints,
  textStyles,
  colorStyles,
}
