import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    isLogin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        },

        IsLogin: (state, action) => {
            state.isLogin = true;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;