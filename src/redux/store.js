import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './todoSlice.js'

export const store = configureStore (
    {
        reducer: {
            tasks: taskReducer,
        }
    }
)