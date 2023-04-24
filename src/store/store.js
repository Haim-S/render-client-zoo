import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import zooSlice from "./slice/zooSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        zoo: zooSlice

    }
});