import { createAsyncAction } from "typesafe-actions"
import { tempType } from "tempType"

export const insertTemp = createAsyncAction(
  "INSERT_TEMP_REQUEST",
  "INSERT_TEMP_SUCCESS",
  "INSERT_TEMP_FAILURE",
)<tempType, tempType, undefined>()

export const findAllTemp = createAsyncAction(
  "FIND_ALL_TEMP_REQUEST",
  "FIND_ALL_TEMP_SUCCESS",
  "FIND_ALL_TEMP_FAILURE",
)<undefined, tempType[], undefined>()

export const updateTemp = createAsyncAction(
  "UPDATE_TEMP_REQUEST",
  "UPDATE_TEMP_SUCCESS",
  "UPDATE_TEMP_FAILURE",
)<tempType, tempType, undefined>()

export const deleteTemp = createAsyncAction(
  "DELETE_TEMP_REQUEST",
  "DELETE_TEMP_SUCCESS",
  "DELETE_TEMP_FAILURE",
)<{ id: string }, { id: string }, undefined>()
