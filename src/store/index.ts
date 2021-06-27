//redux
import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
//router
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
//modules
import rootTempReducer from "./Temp/reducer"
import { tempSaga } from "./Temp/saga"

export const history = createBrowserHistory()
const rootReducer = combineReducers({
  router: connectRouter(history),
  temp: rootTempReducer,
})
function* rootSaga() {
  yield all([tempSaga()])
}

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(rootSaga)

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
)
export type AppState = ReturnType<typeof rootReducer>
