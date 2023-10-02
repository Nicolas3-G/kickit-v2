import { createSlice } from "@reduxjs/toolkit";
import initialLayoutState from "../initialLayoutState";

export const layout = createSlice({
    name: "layout",
    initialState: initialLayoutState,
    reducers: {
        addLayout: (state, action) => {
            const newLayout = { id: action.payload, welcomeText: "Welcome to my group!", }
            state.value.layouts[action.payload] = newLayout;
            console.log("Ran add layout REDUX")

        },
        editLayoutUpdated: (state, action) => {
            state.value.layoutUpdated = action.payload;
        },
        updateLayout: (state, action) => {
            console.log("Running update layout REDUX")
            const { layoutId, layoutData } = action.payload;
            state.value.layouts[layoutId] = { ...state.value.layouts[layoutId], ...layoutData }
        }
    }
})

export const { addLayout, editLayoutUpdated, updateLayout } = layout.actions;
export default layout.reducer;
