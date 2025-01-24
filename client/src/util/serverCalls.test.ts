import { describe, expect, it, vi } from "vitest";
import { loginCurrentUser, registerNewUser } from "./serverCalls";

describe('registerNewUser()', () => {
    it("should successfully register a new user and return the user data", async () => {
        const mockResponse = { firstName: "Name", lastName: "Name", email: "test@test.com", password: "test"};
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse),
            })
        ));

        const newUser = { firstName: "Name", lastName: "Name", email: "test@test.com", password: "test"};
        const result = await registerNewUser(newUser)

        expect(result).toEqual(mockResponse)
        expect(global.fetch).toHaveBeenCalledWith(
            'http://localhost:8080/user/register',
            {
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newUser),
                method: 'POST',
            }
        );
    })

    it("should un-successfully register a new user and throw an error", async () => {
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                status: 400,
            })
        ));

        const newUser = { firstName: "Name", lastName: "Name", email: "test@test.com", password: "test"};
        expect.assertions(1);

        await expect(registerNewUser(newUser)).rejects.toThrowError();
    })
})

describe('loginCurrentUser()', () => {
    it("should successfully login a user and return the user data", async () => {
        const mockResponse = { firstName: "Name", lastName: "Name", email: "test@test.com", password: "test"};
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse),
            })
        ));

        const userLogin = {email: "test@test.com", password: "test"};
        const result = await loginCurrentUser(userLogin)

        expect(result).toEqual(mockResponse)
        expect(global.fetch).toHaveBeenCalledWith(
            'http://localhost:8080/user/login',
            {
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userLogin),
                method: 'POST',
            }
        );
    })

    it("should un-successfully login a user and throw an error", async () => {
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                status: 400,
            })
        ));

        const userLogin = {email: "test@test.com", password: "test"};
        expect.assertions(1);

        await expect(loginCurrentUser(userLogin)).rejects.toThrowError();
    })
})
