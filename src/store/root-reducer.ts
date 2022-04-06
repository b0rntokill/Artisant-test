import { combineReducers } from "redux";
import { ReducerNameSpace } from "../const";
import { appData } from "./app-data";

export const rootReducer = combineReducers({
  [ReducerNameSpace.data]: appData,
});

export type RootState = ReturnType<typeof rootReducer>;
