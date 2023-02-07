import { createSlice } from "@reduxjs/toolkit"

const initState = {
    loading: false,
    data: [],
    dataCity: []
}

const weatherSlice = createSlice({
    name: "weather",
    initialState: initState,
    reducers: {
        getData: (state) => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        
        getCity: (state) => {
            state.loading = true
        },
        getCitySuccess:(state, action) => {
            state.loading = false
            state.dataCity = action.payload
        }
    }
})

export const {getData, getDataSuccess, getCity, getCitySuccess} = weatherSlice.actions
const weatherReducer = weatherSlice.reducer
export default weatherReducer