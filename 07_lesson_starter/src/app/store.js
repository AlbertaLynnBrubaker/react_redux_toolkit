import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import usersReducer from '../features/users/usersSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        users: usersReducer
    },
    // required to use when we use react toolkit query (RTKQuery)
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})