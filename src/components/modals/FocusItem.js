import GroupPage from "../item-pages/GroupPage";
import EventPage from "../item-pages/EventPage";
import CreationPage from "../item-pages/CreationPage";
import { useSelector } from "react-redux";

const FocusItem = () => {
  const state = useSelector((state) => state.dataReducer.value)

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
      {/* <FocusedSideBar /> */}
    </div>
  )
}

export default FocusItem;
