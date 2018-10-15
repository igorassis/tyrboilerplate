import { combineReducers } from "redux";
import { PersonReducer as person } from "../components/home/HomeReducers";

export const Reducers = combineReducers({ person });
