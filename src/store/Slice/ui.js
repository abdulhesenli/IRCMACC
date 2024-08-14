import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    loading : false
}

const uiSlice = createSlice({
    name : "uiSlice",
    initialState,
    reducers : {
        setLoading(state,action){
            state.loading = action.payload;
        }
    }
});

export const {setLoading} = uiSlice.actions;

export default uiSlice;