import React from 'react'
import AddGroup from './modals/AddGroup';



const ModalView = ({ activeModal, updateActiveModal }) => {

    const displayCurrentModal = () => {
        switch (activeModal) {
            case "addGroup":
                return <AddGroup />
            default:
                break;
        }
    }


  return (
    <div onClick={() => updateActiveModal(null)} className="h-screen w-screen bg-gray-800 bg-opacity-70 backdrop-blur-md z-10 fixed">
      {displayCurrentModal()}
    </div>
  )
}

export default ModalView
