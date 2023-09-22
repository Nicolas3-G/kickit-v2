import React from 'react'
import {AiFillHome, AiOutlinePlusCircle} from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { BiSolidCalendarEvent } from 'react-icons/bi'

const FocusedSideBar = () => {
    return (
        <div className="w-20 top-20 right-0 fixed h-screen m-0 flex flex-col">
            <SideBarButton text="Home" icon={<AiFillHome size="25" />} />
            <SideBarButton text="Groups" icon={<HiUserGroup size="25" />} />
            <SideBarButton text="Events" icon={<BiSolidCalendarEvent size="25" />} />
            <SideBarButton text="Add Group" icon={<AiOutlinePlusCircle size="25" />} />
        </div>
    )
}

const SideBarButton = ({icon, text="Tooltip", clickFunction}) => {
    return (
        <div onClick={clickFunction} className="group relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg border-white text-white rounded-full border transition-all duration-300 hover:w-16">
            {icon}
            <span className="absolute w-auto p-2 m-2 min-w-max left-14 opacity-0 group-hover:opacity-100 group-hover:text-gray-700 transition-all duration-500 ease-in-out">{text}</span>
        </div>
    )
}

export default FocusedSideBar
