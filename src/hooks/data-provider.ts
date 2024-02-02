import useSWR from 'swr'

import axios from '@/libs/axios'

const getOne = (url) => axios.get(url).then((resp) => resp.data)
const getMany = (url) => axios.get(url).then((resp) => resp.data)

export const useOne = (url) => useSWR(url, getOne)
export const useMany = (url) => useSWR(url, getMany)
