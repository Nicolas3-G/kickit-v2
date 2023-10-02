import React from 'react'
import {AiFillHome, AiOutlinePlusCircle} from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { BiSolidCalendarEvent } from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux"
import { addGroup } from "@/redux/features/data-slice"
import { addLayout } from "@/redux/features/layout-slice"

const SideBar = ({ updateActiveModal }) => {
  const state = useSelector((state) => state.dataReducer.value)
  const dispatch = useDispatch()

  const handleQuickGroupClick = () => {
    const newGroup = { id: `1${(Object.keys(state.groups).length + 1)}`, title: `Rando name`, type: "group", desc: `Add description...`, events:[], members: [state.userId], ownerId: state.userId, thumbnail: "/groupImages/sf.jpg" , likes: 1, views: 1 }
    dispatch(addGroup(newGroup))
    dispatch(addLayout(newGroup.id))
  }

  return (
    <div className="fixed top-0 z-10 left-0 h-screen m-0 flex flex-col bg-gradient-to-b to-orange-200 from-yellow-200 w-16 text-orange-800">
      <SideBarButton text="Home" icon={<AiFillHome size="25"/>}/>
      <SideBarButton text="Groups" icon={<HiUserGroup size="25" />}/>
      <SideBarButton text="Events" icon={<BiSolidCalendarEvent size="25"/>}/>
      <SideBarButton clickFunction={() => updateActiveModal("addGroup")} text="Add Group" icon={<AiOutlinePlusCircle size="25"/>}/>
      <SideBarButton clickFunction={handleQuickGroupClick} text="Quick Group" icon={<AiOutlinePlusCircle size="15"/>}/>
    </div>
  )
}

const SideBarButton = ({icon, text="Tooltip", clickFunction}) => {
    return (
        <div onClick={clickFunction} className="group relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-orange-300 rounded-sm transition-all duration-300 hover:text-orange-300 hover:bg-orange-700 hover:shadow-gray-400 hover:-translate-y-1">
            {icon}
            <span className="absolute rounded-lg w-auto p-2 m-2 min-w-max left-14  bg-red-700 scale-0 origin-left group-hover:scale-100 text-orange-300 transition-all duration-300 ease-in-out">{text}</span>
        </div>
    )
}

export default SideBar
