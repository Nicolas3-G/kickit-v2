import React, { useContext } from 'react'
import { StateContext } from '@/app/page';
import GroupPage from "../item-pages/GroupPage";
import EventPage from "../item-pages/EventPage";
import CreationPage from "../item-pages/CreationPage";
import SideBar from "../SideBar";

const FocusItem = () => {
  const {state, dispatch} = useContext(StateContext)

  const displayTypePage = () => {
    switch (state.focusedItem.type) {
      case "group":
        return <GroupPage />
      case "event":
        return <EventPage />
      case "creation":
        return <CreationPage /> 
      default:
        return
    }
  }


  return (
    <div onClick={(e) => e.stopPropagation()} className="h-fit mx-20">
      {displayTypePage()}
    </div>
  )
}

export default FocusItem;
