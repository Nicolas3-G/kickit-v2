import React, { useState, useEffect } from 'react'
import TopBar from "./components/TopBar";
import { useSelector } from "react-redux";
import Image from "next/image";
import GroupFeed from "./components/GroupFeed";
import UpcomingEvents from "./components/UpcomingEvents";

const GroupPage = () => {
  const [itemData, setItemData] = useState(null);
  const state = useSelector((state) => state.dataReducer.value)

  useEffect(() => {
    const item = state.groups[state.focusedItem.id];
    setItemData(item);
  }, [state]);

  return (
    <div>
      {itemData && <>
        <TopBar itemData={itemData} />
        <div className="w-full bg-white h-[140vh] p-8 overflow-hidden">
          <section className="flex flex-row h-56">
            <div className="relative h-full w-1/5 rounded-lg overflow-hidden">
              <Image fill className="object-cover" src={itemData.thumbnail} />
            </div>
            <div className="p-4">
              <h1 className="text-5xl font-bold">{itemData.title}</h1>
              <p className="text-gray-500 text-2xl">{itemData.desc}</p>
            </div>
          </section>
          <hr className="bg-black h-3 my-4" />
          <div className="h-full flex flex-row gap-4">
            <GroupFeed />
            <UpcomingEvents />
          </div>
        </div>
      </>}
    </div>
  )
}

export default GroupPage
