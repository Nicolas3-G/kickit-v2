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
        toggleEditMode: (state, action) => {
            state.value.editMode = !state.value.editMode
        },
        joinEvent: (state, action) => {
            console.log("Joining event payload:", action.payload.eventId)
            const event = state.value.events[action.payload.eventId]
            const updatedMembers = [...event.members, action.payload.userId]
            if (!event.members.includes(action.payload.userId)) {
                state.value.events[action.payload.eventId] = { ...state.value.events[action.payload.eventId], members: updatedMembers }
            }
        },
        updateGroup: (state, action) => {
            const { groupId, groupData } = action.payload;
            state.value.groups[groupId] = { ...state.value.groups[groupId], ...groupData }
        },
        toggleLike: (state, action) => {
            let userId = state.value.userId;
            let user = state.value.users[userId];
            let likes = user.likeList;

            console.log("addLike logging: ", likes, "User:", state.value.users[state.value.userId]);

            if (!likes.includes(action.payload.itemId)) {
                state.value.users[state.value.userId].likeList = [...likes, action.payload.itemId];
                // Now we need to update the items like count
                switch (state.value.focusedItem.type) {
                    case "group":
                        state.value.groups[state.value.focusedItem.id].likes += 1;
                        break;
                    case "event":
                        state.value.events[state.value.focusedItem.id].likes += 1;
                        break;
                    case "creation":
                        state.value.creations[state.value.focusedItem.id].likes += 1;
                        break;
                    default:
                        return
                }

                // Problem is we dont know what type of item it is
            } else {
                state.value.users[state.value.userId].likeList = likes.filter((id) => id != action.payload.itemId)
                switch (state.value.focusedItem.type) {
                    case "group":
                        state.value.groups[state.value.focusedItem.id].likes -= 1;
                        break;
                    case "event":
                        state.value.events[state.value.focusedItem.id].likes -= 1;
                        break;
                    case "creation":
                        state.value.creations[state.value.focusedItem.id].likes -= 1;
                        break;
                    default:
                        return
                }
            }
        },
    }
})

export const { addGroup, updateFocusedItem, joinEvent, toggleEditMode, updateGroup, toggleLike } = data.actions;
export default data.reducer;
