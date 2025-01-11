import { CurrentUser, NewUser } from "../types/Types";

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
