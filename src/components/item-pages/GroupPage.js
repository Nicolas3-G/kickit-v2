import React, { useState, useEffect } from 'react'
import TopBar from "./components/TopBar";
import { useSelector } from "react-redux";
import Image from "next/image";
import GroupFeed from "./components/GroupFeed";
import UpcomingEvents from "./components/UpcomingEvents";
import Welcome from "./components/Welcome";
import Highlights from "./components/Highlights";
import GroupEditorOverlay from "./components/GroupEditorOverlay";

const GroupPage = () => {
  const [itemData, setItemData] = useState(null);
  const [eventArray, setEventArray] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const state = useSelector((state) => state.dataReducer.value)
  const layoutState = useSelector((state) => state.layoutReducer.value)
  const currentLayout = layoutState.layouts[state.focusedItem.id];
  

  const createEventArray = () => {
    const eventIds = state.groups[state.focusedItem.id].events;
    
    if (!eventIds) return console.log("No events");

    const eventArray = eventIds.map((eventId) => {
      return {
        ...state.events[eventId],
      }
    })
    setEventArray(eventArray);
  }

  useEffect(() => {
    const item = state.groups[state.focusedItem.id];

    // Check if user is admin
    setIsAdmin(state.userId === item.ownerId);

    createEventArray();
    setItemData(item);
  }, [state]);


  return (
    <div className="relative p-2">
      {itemData && <>
        <TopBar itemData={itemData} />
        <div className="w-full relative bg-white min-h-max p-8 pb-0 overflow-hidden">
          <section className="flex flex-row h-56">
            <div className="relative h-full w-1/5 rounded-lg overflow-hidden">
              <Image fill alt="Group Thumbnail" className="object-cover" src={itemData.thumbnail} />
            </div>
            <div className="p-4">
              <h1 className="text-5xl font-bold">{itemData.title}</h1>
              <p className="text-gray-500 text-2xl">{itemData.desc}</p>
            </div>
          </section>
          <hr className="bg-black h-3 my-4" />
          
          <section className="h-[150vh] grid grid-cols-2 gap-4">
            <GroupFeed isAdmin={isAdmin} currentLayout={currentLayout} />
            <div className="flex-1 max-w-full gap-4 flex flex-col">
              <Welcome text={currentLayout["welcomeText"]}/>
              <UpcomingEvents eventArray={eventArray} />
              <Highlights />
            </div>
          </section>
          {state.editMode && <GroupEditorOverlay itemData={itemData} />}
        </div>
        
      </>}
      {/* {state.editMode && <GroupEditorOverlay />} */}
    </div>
  )
}

export default GroupPage
