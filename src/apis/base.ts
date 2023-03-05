import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const baseURL = 'https://api.coingecko.com/api/v3'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    serialize: (paramObj: any) => {
      const params = new URLSearchParams()
      for (const key in paramObj) {
        params.append(key, paramObj[key])
      }

      return params.toString()
    },
  },
})

export const axiosGET = <RequestData, ResponseData>(
  url: string,
  params?: RequestData,
  options?: AxiosRequestConfig
) => {
  return axiosInstance
    .get<ResponseData, AxiosResponse<ResponseData>, RequestData>(url, { params, ...options })
    .then((response) => response.data)
}
