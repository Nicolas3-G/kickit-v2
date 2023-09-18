import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { StateContext } from '@/app/page';
import Image from 'next/image';
import TopBar from "./components/TopBar";

const GroupPage = () => {
  const [itemData, setItemData] = useState(null);

  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    const item = state.groups.get(state.focusedItem.id);
    setItemData(item);
  }, [state]);

  return (
    <div>
      {itemData && <>
        <TopBar itemData={itemData} />
        <div className="w-full bg-white h-[100vh]">
          Group Page
        </div>
      </>}
    </div>
  )
}

export default GroupPage
