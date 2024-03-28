import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./reducer/tableReducer";

export const store = configureStore({
    reducer: { 
       tableReducer : tableReducer,
    }
})