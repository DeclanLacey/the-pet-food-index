export type NewUser = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export type CurrentUser = {
    email: string,
    password: string
}

export type UserData = {
    email: string,
    firstName: string,
    id: number, 
    lastName: string,
    registrationDate: string,
    token: string | null
}

export type PetType = {
    id: number,
    name: string
}