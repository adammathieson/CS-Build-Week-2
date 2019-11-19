import axios from 'axios'

const key = process.env.REACT_APP_KEY
const url = process.env.REACT_APP_URL
const header = {headers: {Authorization: `Token ${key}`}}

export const init = () => {
    axios
        .get(`${url}init/`, header)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}
