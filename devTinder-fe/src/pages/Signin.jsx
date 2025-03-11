import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export function Signin() {

  const navigate                  = useNavigate();
  const [emailId, setemailId]     = useState("");
  const [password, setPassword]   = useState(""); 
  const [error, setError]         = useState("");
  const dispatch                  = useDispatch();

  const HandleSignin =  async ( ) => {
    try {
      const res =  await axios.post(BASE_URL + "/login" , {
        emailId,password
      },
      {withCredentials:true}
    );
      dispatch(addUser(res.data));
      return  navigate("/feed")
    }
     catch (err) {
      setError(err?.response?.data ||  "something went wrong" )
    }
  }
  return (
    <div className="h-screen w-screen bg-base-300 flex justify-center items-center">
      <div className="card card-border bg-base-100 w-80">
        <div className="card-body">
          <h2 className="card-title  flex justify-center">Login</h2>
          <div>
            <label className="input validator flex-row">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required  onChange={(e) => setemailId(e.target.value)}/>
            </label>
          </div>
          <div className="mt-4">
            <label className="input validator ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input type="password" required placeholder="Password"
                minlength="8" onChange={(e)=> setPassword(e.target.value)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              {error}
            </p>
          </div>
          <div className="card-actions justify-center mt-4 text-center">
            <button className="btn btn-primary"  onClick={HandleSignin}  >Signin</button>
            <p className="validator-hint text-xs">
              Aleready Have an account?{" "}
              <a
                className="underline cursor-pointer"
              >
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
