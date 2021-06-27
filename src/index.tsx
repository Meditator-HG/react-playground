import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
//store
import { ConnectedRouter } from "connected-react-router"
import { store, history } from "store"
import { Provider } from "react-redux"
//root components
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)

reportWebVitals()
