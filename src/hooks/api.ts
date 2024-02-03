import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import axios from '@/libs/axios'

const getOne = (url) => axios.get(url).then((resp) => resp.data)
const getMany = (url) => axios.get(url).then((resp) => resp.data)

export const useOne = (url) => useSWR(url, getOne)
export const useMany = (url) => useSWR(url, getMany)

// sign hook
const sign = (url, { arg: { username, password } }) => axios.post(url, { username, password }).then((resp) => resp.data)
export const useSign = (url) => useSWRMutation(url, sign)

// logout
export const logout = (url) => axios.post(url).then((resp) => resp.data)
export const useLogout = (url) => useSWRMutation(url, logout)
