import { all } from "redux-saga/effects"

import { tempTake } from "./modules/insertTempSaga"

export function* tempSaga() {
  yield all([tempTake])
}
