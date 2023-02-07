import { put, takeEvery } from "redux-saga/effects";
import getApi from "../api/api"
import {getCity, getCitySuccess, getDataSuccess} from "../features/weatherSlice"

function* handleWeatherData(action) {
    try {
        const dataCity = yield getApi.getDataCity(action.payload)
        yield put(getCitySuccess(dataCity))
        const city = {
            latitude: dataCity.coord?.lat,
            longitude: dataCity.coord?.lon,
        }
        const respon = yield getApi.getData(city)
        yield put(getDataSuccess(respon))
    }   
    catch (err) {
        console.log("err", err);
    }
}

export function* watchGetData() {
    yield takeEvery(getCity.type, handleWeatherData)
}