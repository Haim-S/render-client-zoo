import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { setLocalStorageValue } from "../../utils/localStorage.utils";
import authService from "../../services/auth.service";


export const LoginByNameAndEmail = createAsyncThunk("auth/login", async(values)=> {
    const res = await authService.login(values.email, values.password);
    return res;
});

export const isLoginByToken = createAsyncThunk("auth/isLogin", async()=> {
    const res = await authService.isLogin();
    return res;
});

export const registerByPayload = createAsyncThunk("auth/register", async (values)=> {
    const res = await authService.register(
        values.userName,
        values.email,
        values.password
    );
    return res;
})

export const logoutByToken = createAsyncThunk("auth/logout", async(token)=> {
    const res = await authService.logout(token);
    return res;
});




const initialState = {
    isAuth: false,
    error: "",
    user: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        clearErrorMessage: (state) => {
            state.error = "";
        },
        setIsAuth: (state) => {
            state.isAuth = !state.isAuth;
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(LoginByNameAndEmail.pending, (state)=>{
            state.error = "";
            state.isAuth = false;
        })
        .addCase(LoginByNameAndEmail.rejected, (state, action)=>{
            console.log(action.error);
            state.error = action.error ? "The password or email is incorrect" : "";
            state.isAuth = false;
        })
        .addCase(LoginByNameAndEmail.fulfilled, (state, action)=>{
            state.error = "";
            state.isAuth = true;
            state.user = action.payload.data;
            setLocalStorageValue("ac_token", action.payload.jwt_ac_token);
        })

        .addCase(registerByPayload.pending, (state)=>{
            state.isAuth = false;
        })
        .addCase(registerByPayload.rejected, (state, action)=>{
            state.error = action.payload;
            state.isAuth = false;
        })
        .addCase(registerByPayload.fulfilled, (state, action)=>{
            state.isAuth = true;
            state.user = action.payload.data;
            setLocalStorageValue("ac_token", action.payload.jwt_ac_token);
        })

        .addCase(isLoginByToken.pending, (state)=>{
            state.isAuth = false;
        })
        .addCase(isLoginByToken.rejected, (state, action)=>{
            state.error = action.payload;
            state.isAuth = false;
        })
        .addCase(isLoginByToken.fulfilled, (state, action)=>{
            state.isAuth = true;
            state.user = action.payload.data;
        })

        
        .addCase(logoutByToken.pending, (state)=>{
            state.isAuth = true;
        })
        .addCase(logoutByToken.rejected, (state, action)=>{
            state.isAuth = false;
            state.error = action.payload;
        })
        .addCase(logoutByToken.fulfilled, (state, action)=>{
            state.isAuth = false;
            state.user = action.payload.data;
        })
    }
})


export const {clearErrorMessage, setIsAuth} = authSlice.actions;
export default authSlice.reducer;
