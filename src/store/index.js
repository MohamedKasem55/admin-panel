import { configureStore } from "@reduxjs/toolkit";
import { localeReducer } from "./localeSlice";

const store=configureStore({reducer:{locale:localeReducer}})
export default store