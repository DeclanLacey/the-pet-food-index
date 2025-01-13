import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { getUserData } from "../../util/serverCalls";
import { UserData } from "../../types/Types";
import { checkAndRefreshTokens, getAccessToken, getRefreshToken, isTokenExpired } from "../../util/utils";

export async function getData(setLoading: Function, setUserData: Function, getAccessToken: Function, getUserData: Function, navigate: NavigateFunction) {
  try {
    setLoading(true)

    if (isTokenExpired(getRefreshToken())) {
      navigate("/login")
      return
    }

    checkAndRefreshTokens()
    const userData = await getUserData(getAccessToken())
    setUserData(userData)
    setLoading(false)
  }catch (error) {
    setLoading(false)
    throw new Error(`${error}`)
  }
}

export default function UserProfile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    if (isTokenExpired(getRefreshToken())) {
      // Not sure if this is right
      navigate("/login")
    }else {
      checkAndRefreshTokens()
      getData(setLoading, setUserData, getAccessToken, getUserData, navigate)
    }
  }, [navigate]);

  if (loading) return <></>
  if (!userData) return <></>
  
  console.log(getAccessToken)
  return (
    <div>
      <h1>Welcome back {userData.firstName}</h1>
    </div>
  )
}
