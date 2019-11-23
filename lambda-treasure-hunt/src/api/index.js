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

export const status = async () => {
    const { data } = await requestWithAuth().post("status")
    console.log("status ------>", data)
    return data
}

export const take = async (item) => {
    const { data } = await requestWithAuth().post("take", {"name":item})
    console.log("take ------>", data)
    return data
}

export const drop = async (item) => {
    const { data } = await requestWithAuth().post("drop", {"name":item})
    console.log("drop ------>", data)
    return data
}

export const pray = async () => {
    const { data } = await requestWithAuth().post("pray")
    console.log("pray ------>", data)
    return data
}

export const sell = async item => {
    const { data } = await requestWithAuth().post("sell", {"name":item, "confirm":"yes"})
    console.log("sell ------>", data)
    return data
}

export const examine = async name => {
    const { data } = await requestWithAuth().post("examine", {"name":name})
    console.log("examine ------>", data)
    return data
}

export const changeName = async name => {
    const { data } = await requestWithAuth().post("change_name", {"name":name, "confirm":'aye'})
    console.log("change_name ------>", data)
    return data
}

// "You see a faint pattern in the water...

// 10000010
// 00000001
// 01001101
// 01001000
// 00000001
// 10000010
// 00000001
// 01101001
// 01001000
// 00000001
// 10000010
// 00000001
// 01101110
// 01001000
// 00000001
// 10000010
// 00000001
// 01100101
// 01001000
// 00000001
// 10000010
// 00000001
// 00100000
// 01001000
// 00000001
// 10000010
// 00000001
// 01111001
// 01001000
// 00000001
// 10000010
// 00000001
// 01101111
// 01001000
// 00000001
// 10000010
// 00000001
// 01110101
// 01001000
// 00000001
// 10000010
// 00000001
// 01110010
// 01001000
// 00000001
// 10000010
// 00000001
// 00100000
// 01001000
// 00000001
// 10000010
// 00000001
// 01100011
// 01001000
// 00000001
// 10000010
// 00000001
// 01101111
// 01001000
// 00000001
// 10000010
// 00000001
// 01101001
// 01001000
// 00000001
// 10000010
// 00000001
// 01101110
// 01001000
// 00000001
// 10000010
// 00000001
// 00100000
// 01001000
// 00000001
// 10000010
// 00000001
// 01101001
// 01001000
// 00000001
// 10000010
// 00000001
// 01101110
// 01001000
// 00000001
// 10000010
// 00000001
// 00100000
// 01001000
// 00000001
// 10000010
// 00000001
// 01110010
// 01001000
// 00000001
// 10000010
// 00000001
// 01101111
// 01001000
// 00000001
// 10000010
// 00000001
// 01101111
// 01001000
// 00000001
// 10000010
// 00000001
// 01101101
// 01001000
// 00000001
// 10000010
// 00000001
// 00100000
// 01001000
// 00000001
// 10000010
// 00000001
// 00110001
// 01001000
// 00000001
// 10000010
// 00000001
// 00110000
// 01001000
// 00000001
// 10000010
// 00000001
// 00111001
// 01001000
// 00000001
// 00000001"