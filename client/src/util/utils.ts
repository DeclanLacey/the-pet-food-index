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

export function clearToken() {
  localStorage.removeItem('token')
}

export function checkIfEmailValid(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

