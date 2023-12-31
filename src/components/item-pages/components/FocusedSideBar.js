import { toggleEditMode, toggleLike } from "@/redux/features/data-slice"
import React, { useState, useEffect } from 'react'
import { AiFillLike, AiFillEye, AiOutlineCheck } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { ImTicket, ImWrench } from "react-icons/im"
import { RiOrganizationChart } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux"


const FocusedSideBar = () => {
    const state = useSelector((state) => state.dataReducer.value)
    const dispatch = useDispatch();
    const [itemData, setItemData] = useState(null);
    const itemLiked = state.users[state.userId].likeList.includes(state.focusedItem.id);

    useEffect(() => {
        let item;
        switch (state.focusedItem.type) {
            case "group":
                item = state.groups[state.focusedItem.id];
                break;
            case "event":
                item = state.events[state.focusedItem.id];
                break;
            case "creation":
                item = state.creations[state.focusedItem.id];
                break;
            default:
                return
            }
        if (item) setItemData(item);    
      }, [state]);

    const handleLikeClick = () => {
        dispatch(toggleLike({ itemId: itemData.id }));
        // Update user likes
        // Update item likes count
        // Base icon on user likes to itemId
    }

    useEffect(() => {console.log("Logging user update:", state.users)}, [state.users])


    // Dont render if no item data
    if (!itemData) return <div/>;
    return (
        <div className="fixed z-20 w-20 top-20 right-4 h-screen m-0 flex gap-2 flex-col">
            <SideBarButton text="Likes" icon={itemLiked ? <AiOutlineCheck size="25" />:<AiFillLike size="25" />} clickFunction={handleLikeClick} counter={itemData.likes} />
            <SideBarButton text="Views" icon={<AiFillEye size="25" />} counter={itemData.views} />
            <SideBarButton text="Group" icon={<HiUserGroup size="25" />} />
            <SideBarButton text="Join Event" icon={<ImTicket size="25" />} />
            <SideBarButton text="Organizers" icon={<RiOrganizationChart size="25" />} />
            {/* Only show button when owner and is group */}
            {itemData.type == "group" && itemData.ownerId == state.userId && <SideBarButton clickFunction={() => dispatch(toggleEditMode())} text="Edit" icon={<ImWrench size="25" />} />}
        </div>
    )
}

const SideBarButton = ({ icon, text = "Tooltip", clickFunction, counter }) => {
    return (
        <div className="flex flex-col items-center gap-0">
            <div onClick={clickFunction} className="group relative flex items-center justify-center h-12 w-12 mx-auto shadow-lg border-white text-white rounded-full border transition-all duration-300 hover:w-16">
                {icon}
                <span className="absolute w-auto p-2 m-2 min-w-max right-20 opacity-0 group-hover:opacity-100 group-hover:text-gray-100 text-gray-700 transition-all duration-500 ease-in-out">{text}</span>
            </div>
            {counter && <p className="m-0 text-xs text-white">{counter}</p>}
        </div>
    )
}

export default FocusedSideBar
