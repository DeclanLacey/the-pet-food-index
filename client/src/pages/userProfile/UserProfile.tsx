import { useEffect } from "react";
import { getToken } from "../../util/utils";
import { useNavigate } from "react-router";

export default function UserProfile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      // Redirect to login if no token is found
      navigate("/login");
    }
  }, [navigate]);
  
  return (
    <div>
      <h1>User profile</h1>
    </div>
  )
}
