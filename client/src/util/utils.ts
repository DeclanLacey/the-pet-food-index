export function setActiveStyling(active : {isActive: boolean, isPending: boolean, isTransitioning: boolean}) {
    if (active.isActive) {
      return {textDecoration: "underline"}
    }
}

export function storeToken(token : string) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}