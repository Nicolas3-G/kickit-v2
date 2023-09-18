"use client"

import SideBar from '@/components/SideBar'
import MainDisplayWindow from '@/components/MainDisplayWindow'
import CardGrid from '@/components/CardGrid'
import React, { useReducer, useState, useEffect } from 'react'
import reducer, { ACTIONS } from '@/actions/actions';
import initialReducerState from '@/actions/InitialReducerState';
import ModalView from '@/components/ModalView'

export const StateContext = React.createContext();

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialReducerState);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    console.log("State updated:", state.focusedItem);
  }, [state.focusedItem]);

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
    // Updates focused item in state
    dispatch({ type: ACTIONS.UPDATE_FOCUSED_ITEM, payload: { item: { id: item.id, type: item.type } } })
  }


  return (
    <StateContext.Provider value={{ state, dispatch }}>
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
    </StateContext.Provider>
  )
}
