"use client"

import SideBar from '@/components/SideBar'
import MainDisplayWindow from '@/components/MainDisplayWindow'
import CardGrid from '@/components/CardGrid'
import React, { useState, useEffect } from 'react'
import ModalView from '@/components/ModalView'
import { useDispatch, useSelector } from "react-redux"
import { updateFocusedItem } from "@/redux/features/data-slice"

export const StateContext = React.createContext();

export default function Home() {
  // Redux State
  const state = useSelector((state) => state.dataReducer.value)
  const dispatch = useDispatch();

  // Other State
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    console.log("State groups updated:", state.groups);
  }, [state.groups]);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);

  const updateActiveModal = (selectedModal) => {
    setActiveModal(selectedModal);
  }

  const handleItemFocus = (item) => {
    updateActiveModal("focusItem");
    // Updates focused item in REDUX state
    dispatch(updateFocusedItem({ item: { id: item.id, type: item.type } }))
  }


  return (
      <main>
        {activeModal && <ModalView activeModal={activeModal} updateActiveModal={updateActiveModal} />}
        <SideBar updateActiveModal={updateActiveModal} />
        <MainDisplayWindow>
          <div className="text-center pt-24">
            <h1 className="text-7xl font-bold">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">Kickit</span></h1>
            <p className="text-xl">A platform for groups, creations, and inspiration</p>
          </div>
          <CardGrid handleItemFocus={handleItemFocus} />
        </MainDisplayWindow>
      </main>
  )
}
