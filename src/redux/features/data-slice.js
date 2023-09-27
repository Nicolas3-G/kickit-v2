import { createSlice } from "@reduxjs/toolkit";
import initialReducerState from "@/actions/InitialReducerStateRedux";

export const data = createSlice({
    name: "data",
    initialState: initialReducerState,
    reducers: {
        addGroup: (state, action) => {
            let newGroup = action.payload
            state.value.groups[newGroup.id] = newGroup;
            console.log("Ran add group REDUX")

        },
        updateFocusedItem: (state, action) => {
            state.value.focusedItem = action.payload.item;
        },
        joinEvent: (state, action) => {
            console.log("Joining event payload:", action.payload.eventId)
            const event = state.value.events[action.payload.eventId]
            const updatedMembers = [...event.members, action.payload.userId]
            if (!event.members.includes(action.payload.userId)) {
                state.value.events[action.payload.eventId] = { ...state.value.events[action.payload.eventId], members: updatedMembers }
            }
        }
    }
})

export const { addGroup, updateFocusedItem, joinEvent } = data.actions;
export default data.reducer;
