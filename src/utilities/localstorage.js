import { KEY_PROFILE, KEY_TOKEN } from './constant'

export const getAccessTokenLocalStorage = () => {
  return localStorage.getItem(KEY_TOKEN.ACCESS_TOKEN)
}
export const setAccessTokenLocalStorage = (value) => {
  return localStorage.setItem(KEY_TOKEN.ACCESS_TOKEN, value)
}
export const removeAccessTokenLocalStorage = () => {
  return localStorage.removeItem(KEY_TOKEN.ACCESS_TOKEN)
}
export const getRefreshTokenLocalStorage = () => {
  return localStorage.getItem(KEY_TOKEN.REFRESH_TOKEN)
}
export const setRefreshTokenLocalStorage = (value) => {
  return localStorage.setItem(KEY_TOKEN.REFRESH_TOKEN, value)
}
export const removeRefreshTokenLocalStorage = () => {
  return localStorage.removeItem(KEY_TOKEN.REFRESH_TOKEN)
}
export const getProfileLocalStorage = () => {
  return JSON.parse(localStorage.getItem(KEY_PROFILE))
}
export const setProfileLocalStorage = (value) => {
  return localStorage.setItem(KEY_PROFILE, value)
}
export const removeProfileLocalStorage = () => {
  return localStorage.removeItem(KEY_PROFILE)
}
