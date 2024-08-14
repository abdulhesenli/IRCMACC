import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./Slice/ui.js";
import {api} from "./Api/api.js";

const middleware = (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
};

const store = configureStore({
    reducer : {
        "uiSlice" : uiSlice.reducer,
        [api.reducerPath] : api.reducer
    },
    middleware
})

export default store;