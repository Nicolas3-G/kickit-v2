import { createSlice } from "@reduxjs/toolkit";
import initialDataState from "@/redux/initialDataState";

export const data = createSlice({
    name: "data",
    initialState: initialDataState,
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
            const userId = state.value.userId;
            const itemId = action.payload.itemId;
            let user = state.value.users[userId];
            let likes = user.likeList;
            let itemType = state.value.focusedItem.type;

            if (!likes.includes(itemId)) {
                // Update user liked list
                state.value.users[userId].likeList = [...likes, itemId];

                // Add like based on item type
                if (itemType == "group" ) {
                    state.value.groups[itemId].likes += 1;
                } else if (itemType == "event") {
                    state.value.events[itemId].likes += 1;
                } else {
                    state.value.creations[itemId].likes += 1;
                }
                // Problem is we dont know what type of item it is
            } else {
                // remove item from user likeList
                state.value.users[state.value.userId].likeList = likes.filter((id) => id != action.payload.itemId)
                
                // Remove like based on item
                if (itemType == "group" ) {
                    state.value.groups[itemId].likes -= 1;
                } else if (itemType == "event") {
                    state.value.events[itemId].likes -= 1;
                } else {
                    state.value.creations[itemId].likes -= 1;
                }
            }
        },
    }
})

export const { addGroup, updateFocusedItem, joinEvent, toggleEditMode, updateGroup, toggleLike } = data.actions;
export default data.reducer;
