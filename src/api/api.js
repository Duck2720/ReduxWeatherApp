import axiosInstance from "./axiosClient"

const API_KEY = "97c848b579d71e0c5df6605498f9c7a1"

const getAPI = {
    getDataCity(action) {
        return axiosInstance.get(
            `weather?q=${action}&units=metric&appid=${API_KEY}`
        )
    },
    getData({latitude,longitude}) {
        return axiosInstance.get(
            `onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        )
    }
}

export default getAPI