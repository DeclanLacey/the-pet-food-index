import { useEffect, useState } from "react";
import { getToken } from "../../util/utils";
import { useNavigate } from "react-router";
import { getUserData } from "../../util/serverCalls";
import { UserData } from "../../types/Types";

export async function getData(setLoading: Function, setUserData: Function, getToken: Function, getUserData: Function) {
  try {
    setLoading(true)
    const userData = await getUserData(getToken())

    setUserData(userData)
    setLoading(false)
  }catch (error) {
    setLoading(false)
    console.log(error)
  }
}

export default function UserProfile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    if (!getToken()) {
      // Redirect to login if no token is found
      navigate("/login");
    }else {
      getData(setLoading, setUserData, getToken, getUserData)
    }
  }, [navigate]);

  if (loading) return <></>
  if (!userData) return <></>
  
  return (
    <div>
      <h1>Welcome back {userData.firstName}</h1>
    </div>
  )
}
