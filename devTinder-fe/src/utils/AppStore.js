import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const loadstore = () => {
      try {
        const serializedState = localStorage.getItem("user");
        return serializedState ?  JSON.parse(serializedState) : {};
      } catch (error) {
        console.error("Could not load state", error);
      }
}

 export const store = configureStore({
    reducer : {
        user : useReducer
    },
    preloadedState: {user :  loadstore()}
 })

 store.subscribe( ()=>{
    localStorage.setItem("user" , JSON.stringify(store.getState().user()));
 })