import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.font_color};
    background-color: ${({ theme }) => theme.body_color};
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.link_color}
  }

  a:hover {
    color: ${({ theme }) => theme.link_color_hover}
  }
`

export default GlobalStyle
