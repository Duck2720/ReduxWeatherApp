import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./rootSaga"
import weatherReducer from "../features/weatherSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
       weather: weatherReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
