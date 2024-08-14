import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./Slice/ui.js";

const store = configureStore({
    reducer : {
        "uiSlice" : uiSlice.reducer
    }
})

export default store;