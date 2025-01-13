import {jwtDecode} from "jwt-decode";
import { getNewTokens } from "./serverCalls";


export function setActiveStyling(active : {isActive: boolean, isPending: boolean, isTransitioning: boolean}) {
    if (active.isActive) {
      return {textDecoration: "underline"}
    }
}

export function storeAccessToken(token : string) {
  localStorage.setItem('accessToken', token)
}

export function storeRefreshToken(token : string) {
  localStorage.setItem('refreshToken', token)
}

export function getAccessToken() {
  return localStorage.getItem('accessToken')
}

export function getRefreshToken() {
  return localStorage.getItem('refreshToken')
}

export function clearTokens() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function checkIfEmailValid(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export function isTokenExpired(token : string | null) {
  if (!token) return true;  // No token means expired or invalid
  const decoded = jwtDecode(token);

  const currentTime = (Date.now() / 1000);
  const expirationDate = decoded.exp!
  const isExpired = expirationDate < currentTime;
  return isExpired
}

export async function checkAndRefreshTokens() {
  if (isTokenExpired(getAccessToken())) {
    try {
      const refreshToken = getRefreshToken()
      const response = await getNewTokens(refreshToken)
      console.log(response)
      if (response.accessToken && response.refreshToken) {
        storeAccessToken(response.accessToken)
        storeRefreshToken(response.refreshToken)
      }
    }catch (error) {
      throw new Error(`${error}`)
    }
  }
}