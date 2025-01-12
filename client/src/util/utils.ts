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

export function clearToken() {
  localStorage.removeItem('token')
}

export function checkIfEmailValid(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export function isTokenExpired(token : string | null) {
  if (!token) return true;  // No token means expired or invalid
  const decoded = jwtDecode(token);

  const currentTime = Date.now();
  const expirationDate = decoded.exp!
  const isExpired = expirationDate < currentTime;
  return isExpired
}

export async function checkAndRefreshTokens() {
  if (isTokenExpired(getRefreshToken())) {
    return false
  }else if (isTokenExpired(getAccessToken())) {
    try {
      const response = await getNewTokens(getRefreshToken())
      if (response) {
        storeAccessToken(response.accessToken)
        storeRefreshToken(response.refreshToken)
      }
      return true
    }catch (error) {
      throw new Error(`${error}`)
    }
  }
}