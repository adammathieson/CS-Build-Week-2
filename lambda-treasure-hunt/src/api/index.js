import axios from 'axios'

const { REACT_APP_KEY, REACT_APP_URL } = process.env

const axiosConfig = {
    baseURL: REACT_APP_URL
  }

const requestWithAuth = () => {
    const instance = axios.create({
        ...axiosConfig,
        headers: {Authorization: `Token ${REACT_APP_KEY}`}
    })
    return instance
}

export const init = async () => {
    const { data } = await requestWithAuth().get("init")
    console.log("init: ------>", data)
    return data
}

export const move = async (dir, id) => {
    const { data } = await requestWithAuth().post("move", {"direction":dir, "next_room_id":id})
    console.log("move: ------>", data)
    return data
}