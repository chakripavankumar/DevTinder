import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { LandingPage } from "./pages/LandingPage";
import { Signin } from "./pages/Signin";
import { SigninUp } from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/feed" element={<Main />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<SigninUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
