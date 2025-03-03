import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function SigninUp() {
  const navigate = useNavigate();
  const [fristname,SetFristName] = useState("");
  const [lastname, SetLastName]  = useState("");
  const [email, setEmail]        = useState("");
  const [password, setPassword]  = useState("");

  const HandleSignup = async () => {
     try {
           const res = await axios.post("http://localhost:3000/signup",{
            fristname, lastname,email,password
        });
     } catch (error) {
       console.log(error);
       
     }
  };
  return (
    <div className=" h-screen w-screen bg-base-300 flex justify-center items-center">
      <div className="card card-border bg-base-100 w-80">
        <div className="card-body">
          <h2 className="card-title  flex justify-center">Create Account</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your name?</legend>
            <input type="text" className="input" placeholder="Type here" onChange={(e)=> SetFristName(e.target.value)} />
          </fieldset>
          <fieldset className="fieldset">
            <input type="text" className="input" placeholder="lastname" onChange={(e)=> SetLastName(e.target.value)} />
          </fieldset>
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
              <input
                type="email "
                placeholder="mail@site.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-2">
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
              <input
                type="password"
                requiredplaceholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={(e) => setPassword(e.target.value)}
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number
            </p>
          </div>
          <div className="card-actions justify-center mt-4 text-center">
            <button className="btn btn-primary" onClick={HandleSignup}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
