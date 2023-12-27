import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // required to use when we use react toolkit query (RTKQuery)
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})