import { createSlice } from "@reduxjs/toolkit";
import initialLayoutState from "../initialLayoutState";

export const layout = createSlice({
    name: "layout",
    initialState: initialLayoutState,
    reducers: {
        addLayout: (state, action) => {
            const newLayout = { id: action.payload, welcomeText: "Welcome to my group!", feedList: [] }
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
        },
        createFeedPost: (state, action) => {
            const layoutId = action.payload.layoutId;
            const newPost = {
                poster: action.payload.poster,
                text: action.payload.postText,
                timestamp: action.payload.timestamp,
                imageOne: action.payload.imageOne
            }
            state.value.layouts[layoutId].feedList = [...state.value.layouts[layoutId].feedList, newPost]
        },
    }
})

export const { addLayout, editLayoutUpdated, updateLayout, createFeedPost } = layout.actions;
export default layout.reducer;
