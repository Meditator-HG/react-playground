import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppState } from "store"
import {
  deleteTemp,
  findAllTemp,
  insertTemp,
  updateTemp,
} from "store/Temp/actions"
import { tempType } from "tempType"

export const useTempActions = () => {
  const dispatch = useDispatch()
  return {
    insertTemp: useCallback(
      (payload: tempType) => dispatch(insertTemp.request(payload)),
      [dispatch],
    ),

    findAllTemp: useCallback(() => dispatch(findAllTemp.request()), [dispatch]),

    updateTemp: useCallback(
      (payload: tempType) => dispatch(updateTemp.request(payload)),
      [dispatch],
    ),

    deleteTemp: useCallback(
      (id: string) => dispatch(deleteTemp.request({ id: id })),
      [dispatch],
    ),
  }
}

export function useTempStatus() {
  return useSelector((state: AppState) => state.temp)
}
