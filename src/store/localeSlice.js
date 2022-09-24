
import { createSlice } from "@reduxjs/toolkit";
import { locales } from "../i18n";
const localeSlice=createSlice({
    name: "locale",
    initialState: {
        locale: locales.ARABIC
    },
    reducers: {
        setLocale(state, action) {
            state.locale = action.payload;
        }
    }
})

export const localeReducer=localeSlice.reducer;
export const localeAction=localeSlice.actions;
