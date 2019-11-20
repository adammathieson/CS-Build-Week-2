
const { REACT_APP_KEY, REACT_APP_URL } = process.env
// const key = process.env.REACT_APP_KEY
// const url = process.env.REACT_APP_URL
// const header = {headers: {Authorization: `Token ${key}`}}

const axiosConfig = {
    baseURL: REACT_APP_URL
  }

const requestWithAuth = () => {
    const instance = axios.create({
        ...axiosConfig,
        headers: {headers: {Authorization: `Token ${key}`}}
    })
    return instance
}

export const init = async () => {
    const { data } = await requestWithAuth().get("init")
    console.log("with Auth: ------>", data)
    return data
}

// export const init = () => {
//     axios
//     .get(`${url}init/`, header)
//     .then(res => {
//         // console.log(res.data)
//         return res.data
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }