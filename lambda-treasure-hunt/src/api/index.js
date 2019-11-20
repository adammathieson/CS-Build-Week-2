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
    console.log("with Auth: ------>", data)
    return data
}