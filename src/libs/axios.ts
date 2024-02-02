import _axios from 'axios'

const axios = _axios.create({
  baseURL: '/api/'
})

export default axios
