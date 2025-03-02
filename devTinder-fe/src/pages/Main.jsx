import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import {Footer} from "../components/Footer"
import { Body } from "./Body"


const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Main
