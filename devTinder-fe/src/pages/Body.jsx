import axios from "axios"
import { BASE_URL } from "../../config"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

export function Body(){
    const navigate  = useNavigate();
    const dispatch  = useDispatch();
    
     const fetchUser  = async () =>{
        try {
              const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true,
              });
              dispatch(addUser(res.data));
        } catch (error) {
            navigate("/signin")
            console.log(error); 
        }
     }
     useEffect(()=> {
      fetchUser();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
    return(
        <div className="h-screen w-screen pt-2 ">
           <div className="text-3xl font-bold">
            heyyyyy
           </div>
        </div>
    )
}