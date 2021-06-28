import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 16px;
  }

  body {
    margin: 0;
  }

  #root{
    background-color: ${({ theme }) => theme.color.veryLight};
  }


  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
    }
`

export default GlobalStyle
