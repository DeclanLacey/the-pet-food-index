import { CurrentUser, NewUser } from "../types/Types";
import { getRefreshToken, isTokenExpired } from "./utils";

export async function registerNewUser(newUser: NewUser) {
    try {
        const response = await fetch("http://localhost:8080/user/register", {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newUser),
            method: "POST",
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        return await response.json()
    }catch (error) {
      throw new Error(`${error}`)
    }
}

export async function loginCurrentUser(currentUser: CurrentUser) {

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(currentUser),
        method: "POST"
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      return await response.json()
    }catch (error) {
      throw new Error(`${error}`)
    }
}

export async function getUserData(token: string) {
  try {
    const response = await fetch("http://localhost:8080/user/profile", {
      headers: {'content-type': 'application/json', 'Authorization': `Bearer ${token}`},
      method: "GET"
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return await response.json()
  }catch (error) {
    throw new Error(`${error}`)
  }

}

export async function getNewTokens(token: string | null) {
  try {
    const response = await fetch(`http://localhost:8080/user/refresh-token`, {
      headers: {'content-type': 'application/json', 'Authorization': `Bearer ${token}`},
      method: "POST"
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return response.json()
  }catch (error) {
    throw new Error(`${error}`)
  }
}

export async function getAllPetTypes() {
  try {
    const response = await fetch(`http://localhost:8080/pets/pet-types`, {
      headers: {'content-type': 'application/json'},
      method: "GET"
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return response.json()
  }catch (error) {
    throw new Error(`${error}`)
  }
}
