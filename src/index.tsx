import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
//styled-components
import { ThemeProvider } from "styled-components"
import { theme } from "themes"
import GlobalStyle from "themes/GlobalStyle"
//root components
import App from "./components/App/App"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
