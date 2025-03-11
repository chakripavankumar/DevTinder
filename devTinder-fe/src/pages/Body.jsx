import axios from "axios";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

export function Body() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userData || Object.keys(userData).length === 0) { 
        try {
          const res = await axios.get(`${BASE_URL}/profile/view`, {
            withCredentials: true,
          });

          dispatch(addUser(res.data));
        } catch (error) {
          if (error.response?.status === 401) { // ✅ Correct error checking
            navigate("/signin");
          }
          console.error("Error fetching user:", error);
        }
      }
    };
    fetchUser();
  }, [dispatch, navigate, userData]); // ✅ Add dependencies

  return (
    <div className="h-screen w-screen pt-2">
      <div className="text-3xl font-bold">Heyyyyy {userData.firstName}</div>
    </div>
  );
}