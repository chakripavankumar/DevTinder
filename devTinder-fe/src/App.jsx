import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { LandingPage } from "./pages/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/feed" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
