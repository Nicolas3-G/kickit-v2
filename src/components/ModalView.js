import React from 'react'
import AddGroup from './modals/AddGroup';
import FocusItem from './modals/FocusItem';



const ModalView = ({ activeModal, updateActiveModal }) => {

    // Based on what activeModal is we return a component for that modal
    const displayCurrentModal = () => {
        switch (activeModal) {
            case "addGroup":
                return <AddGroup updateActiveModal={updateActiveModal} />
            case "focusItem":
                return <FocusItem />
            default:
                break;
        }
    }


  return (
    <div onClick={() => updateActiveModal(null)} className="h-screen overflow-y-auto overflow-x-hidden w-screen bg-gray-800 bg-opacity-70 backdrop-blur-md z-10 fixed">
      {displayCurrentModal()}
    </div>
  )
}

export default ModalView
