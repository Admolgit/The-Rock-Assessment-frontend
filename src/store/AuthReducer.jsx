import { createSlice } from "@reduxjs/toolkit";

const initialState = {auth:false, user:null};

const authReducer = createSlice({
    initialState,
    name: "auth",
    reducers: {
        login: (state, action) => {
            console.log(action.payload?.user);
            if (action.payload){
                localStorage.setItem("token", action.payload.token.accessToken);
                localStorage.setItem("user", JSON.stringify(action?.payload?.user));
                state.auth = true;
                state.user = action.payload.user;
            }},
            
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.clear();
            state.auth = false;
            state.user = null;
        }
    }

})

export const AUTH_ACTIONS = {...authReducer.actions};
export default authReducer.reducer;