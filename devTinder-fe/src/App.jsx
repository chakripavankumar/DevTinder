import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { LandingPage } from "./pages/LandingPage";
import { Signin } from "./pages/Signin";
import { SigninUp } from "./pages/SignUp";
import { Provider } from "react-redux";
import { store } from "./utils/AppStore";

function App() {
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SigninUp />} />
            <Route path="/feed" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
