import React from 'react'
import {AiFillHome, AiOutlinePlusCircle} from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { BiSolidCalendarEvent } from 'react-icons/bi'

const SideBar = ({ updateActiveModal }) => {

  return (
    <div className="fixed top-0 left-0 h-screen m-0 flex flex-col bg-gradient-to-b to-orange-200 from-yellow-200 w-16 text-orange-800">
      <SideBarButton text="Home" icon={<AiFillHome size="25"/>}/>
      <SideBarButton text="Groups" icon={<HiUserGroup size="25" />}/>
      <SideBarButton text="Events" icon={<BiSolidCalendarEvent size="25"/>}/>
      <SideBarButton clickFunction={() => updateActiveModal("addGroup")} text="Add Group" icon={<AiOutlinePlusCircle size="25"/>}/>
    </div>
  )
}

const SideBarButton = ({icon, text="Tooltip", clickFunction}) => {
    return (
        <div onClick={clickFunction} className="group relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-orange-300 rounded-sm transition-all duration-300 hover:text-orange-300 hover:bg-orange-700 hover:shadow-gray-400 hover:-translate-y-1">
            {icon}
            <span className="absolute w-auto p-2 m-2 min-w-max left-14 opacity-0 group-hover:opacity-100 group-hover:text-gray-700 transition-all duration-500 ease-in-out">{text}</span>
        </div>
    )
}

export default SideBar
