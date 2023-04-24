
import axios from "axios";


import {getLocalStorageValue,
    deleteLocalStorageValue
    } from "../utils/localStorage.utils";

const api = axios.create({
    baseURL: `https://my-zoo-server.onrender.com${"/auth"}`,
    headers: {"Content-Type": "application/json"},
});

const login = async (email, password) => {
    try {
        const response = await api.post("/login", {email, password});
        return response.data;
    } catch (error) {
        return Promise.reject(error);
        
    }
};


const logout = async () => {
    try {
        const token = getLocalStorageValue("ac_token");
        if(!token) return;
        const {data} = await api.delete("/logout", {data: {token}});
        if(data.ok){
            deleteLocalStorageValue("ac_token");
            return data;
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};


const register = async (
    userName,
    email,
    password
) => {
    try {
        const response = await api.post("/register", {
            userName,
            email,
            password
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

const isLogin = async () => {
    try {
        const token = getLocalStorageValue("ac_token");
        if(!token) return Promise.reject();
        const response = await api.post("/isLogin", {
            ac_token: token,
        });
        return response.data;
    } catch (error) {
        Promise.reject(error);
    }
}



const authService = {login, logout, register, isLogin};
export default authService;
