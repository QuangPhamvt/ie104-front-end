import axios from 'axios'
const PATH = {
  GET_LIST_PROVINCE: '/api/p/',
  GET_LIST_DISTRICT: '/api/p/',
}
const axiosLocation = axios.create({
  baseURL: 'https://provinces.open-api.vn',
})

const locationApi = {
  getListProvince: () => {
    const url = PATH.GET_LIST_PROVINCE
    return axiosLocation.get(url)
  },
  getListDistrict: (payload) => {
    const { code } = payload
    const url = `${PATH.GET_LIST_DISTRICT}${code}?depth=2`
    return axiosLocation.get(url)
  },
  getListWard: (payload) => {
    const { code } = payload
    const url = `/api/d/${code}?depth=2`
    return axiosLocation.get(url)
  },
}
export default locationApi
