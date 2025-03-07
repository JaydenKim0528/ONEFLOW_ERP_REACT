import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter";
import RegisterReducer from "./slice/register/register"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        register: RegisterReducer,
    },
});

export default store;
