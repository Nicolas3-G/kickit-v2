import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data-slice";
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
    reducer: {
        dataReducer,
    }
})