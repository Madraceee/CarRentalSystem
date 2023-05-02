import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    id: "",
    token: {}
};

const userSlice = createSlice({
    name: "UserProfile",
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log(action);
            state.username = action.payload.username;
            state.id = action.payload.userId;
            state.token = action.payload.token;
        },
        logout: (state) =>{
            state.username = "";
            state.id = "";
            state.token = "";
        }
    }
});

export default userSlice.reducer;
export const { login,logout } = userSlice.actions;