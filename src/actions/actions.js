export const ACTIONS = {
    ADD_GROUP: "add_group",
    JOIN_GROUP: "join_group",
    LEAVE_GROUP: "leave_group"
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_GROUP:
            let newGroup = action.payload.group
            return { ...state, groups: state.groups.set(newGroup.id, newGroup) }
        case ACTIONS.JOIN_GROUP:
            // select group from groups
            var updatedGroup = { ...state.groups.get(action.payload.groupId) }
            // Add member (if not already a member)
            if (!updatedGroup.members.includes(action.payload.userId)) {
                updatedGroup.members.push(action.payload.userId);
            }

            // Update state.groups
            return { ...state, groups: state.groups.set(action.payload.groupId, updatedGroup) }
        case ACTIONS.LEAVE_GROUP:
            var updatedGroup = { ...state.groups.get(action.payload.groupId) }
            // Get index of user
            var userIndex = updatedGroup.members.indexOf(action.payload.userId);
            // Remove User
            updatedGroup.members.splice(userIndex, 1);
            return { ...state, groups: state.groups.set(action.payload.groupId, updatedGroup) }

        default:
            return state
    }

}

export default reducer;