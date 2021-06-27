import { insertTemp } from "../../actions"
import { put, takeEvery } from "redux-saga/effects"

function* insertTempSaga(
  action: ReturnType<typeof insertTemp.request>,
): Generator {
  try {
    // yield put(insertTemp.success())
  } catch (error) {
    // yield put(insertTemp.failure())
  }
}

export const tempTake = takeEvery(insertTemp.request, insertTempSaga)
