import axios from 'axios'
import type { AxiosInstance } from 'axios'

export const $api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
