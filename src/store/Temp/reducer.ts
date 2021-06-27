import { createReducer, ActionType } from "typesafe-actions"
import { combineReducers } from "redux"
import { insertTemp, findAllTemp, updateTemp, deleteTemp } from "./actions"
import { tempType } from "tempType"

type actions = ActionType<typeof import("./actions")>

const loadingReducer = createReducer<boolean, actions>(false)
  .handleAction(
    [
      insertTemp.request,
      findAllTemp.request,
      updateTemp.request,
      deleteTemp.request,
    ],
    () => true,
  )
  .handleAction(
    [
      insertTemp.success,
      insertTemp.failure,
      findAllTemp.success,
      findAllTemp.failure,
      updateTemp.success,
      updateTemp.failure,
      deleteTemp.success,
      deleteTemp.failure,
    ],
    () => false,
  )

const tempReducer = createReducer<tempType[], actions>([])
  .handleAction(insertTemp.success, (state, action) =>
    state.concat(action.payload),
  )
  .handleAction(findAllTemp.success, (state, action) => action.payload)
  .handleAction(updateTemp.success, (state, action) => {
    const id = action.payload.id
    const idx = state.findIndex(value => value.id === id)
    const newTemp = [
      ...state.slice(0, idx),
      action.payload,
      ...state.slice(idx + 1),
    ]
    return newTemp
  })
  .handleAction(deleteTemp.success, (state, action) =>
    state.filter(value => value.id !== action.payload.id),
  )

const rootTempReducer = combineReducers({
  loading: loadingReducer,
  temp: tempReducer,
})

export default rootTempReducer
