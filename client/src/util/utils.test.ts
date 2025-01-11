import { describe, expect, it, vi } from "vitest";
import { checkIfEmailValid, clearToken, getToken, setActiveStyling, storeToken } from "./utils";

describe("setActiveStyling()", () => {
    it("should return an object with the a key of isActive and a value of true", () => {
        const mockActiveObject = {
            isActive: true,
            isPending: false,
            isTransitioning: false
        }

        const result = setActiveStyling(mockActiveObject)

        expect(result).toStrictEqual({textDecoration: "underline"})
    })

    it("should return undefined the object with a key of textDecorations has the value of false", () => {
        const mockActiveObject = {
            isActive: false,
            isPending: false,
            isTransitioning: false
        }

        const result = setActiveStyling(mockActiveObject)

        expect(result).toBeUndefined()
    })
})

describe('local storage functions', () => {
    vi.stubGlobal('localStorage', {
        setItem: vi.fn(),
        getItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn(),
    });

    describe('storeToken()', () => {
        it("should call localStorage.setItem with the same token that is passed in and the key of 'token' ", () => {
            const token = "test"
            storeToken(token)
            expect(localStorage.setItem).toHaveBeenCalledWith('token', token)
        })
    })

    describe('getToken()', () => {
        it("should call localStorage.getItem with the key name of 'token' ", () => {
            const keyName = 'token'
            getToken()
            expect(localStorage.getItem).toHaveBeenCalledWith(keyName)
        })
    })

    describe('clearToken()', () => {
        it("should call localStorage.removeItem with the key name of 'token' ", () => {
            const keyName = 'token'
            clearToken()
            expect(localStorage.removeItem).toHaveBeenLastCalledWith(keyName)
        })
    })
})

describe('checkIfEmailValid()', () => {
    it('should return true if the email is in the valid pattern of xyz@xyz.com', () => {
        const input = "test@test.com"
        const result = checkIfEmailValid(input)
        expect(result).toBe(true)
    })

    it('should return false if the email is in the invalid pattern of @xyx.com', () => {
        const input = "@test.com"
        const result = checkIfEmailValid(input)
        expect(result).toBe(false)
    })

    it('should return false if the email is in the invalid pattern of xyz@', () => {
        const input = "xyz@"
        const result = checkIfEmailValid(input)
        expect(result).toBe(false)
    })

    it('should return false if the email is in the invalid pattern of xyz@xyx', () => {
        const input = "test@test"
        const result = checkIfEmailValid(input)
        expect(result).toBe(false)
    })

    it('should return false if the string is not in the format of an email', () => {
        const input = "random"
        const result = checkIfEmailValid(input)
        expect(result).toBe(false)
    })
})



