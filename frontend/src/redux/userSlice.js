import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailId: "",
    role: "",
    token: ""
};

const userSlice = createSlice({
    name: "UserProfile",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.emailId = action.payload.emailId;
            state.role = action.payload.role;
            state.token = action.payload.token;
        },
        logout: (state) =>{
            state.emailId = "";
            state.role = "";
            state.token = "";
        }
    }
});

export default userSlice.reducer;
export const { login,logout } = userSlice.actions;