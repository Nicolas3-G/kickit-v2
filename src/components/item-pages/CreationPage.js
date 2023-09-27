import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { StateContext } from '@/app/page';
import Image from 'next/image';
import TopBar from "./components/TopBar";
import { useSelector } from "react-redux";

const CreationPage = () => {
  const [itemData, setItemData] = useState(null);

  const state = useSelector((state) => state.dataReducer.value);

  useEffect(() => {
    const item = state.creations[state.focusedItem.id];
    setItemData(item);
  }, [state]);


  return (
    <div>
      {itemData && <>
        <TopBar itemData={itemData} />
        <div className="w-full bg-white h-[100vh]">
          <div className="w-full h-full relative">
            <Image src={itemData.thumbnail} fill className="object-cover"/>
          </div>
        </div>
      </>}
    </div>
  )
}

export default CreationPage
