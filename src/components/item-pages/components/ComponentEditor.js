import { editLayoutUpdated, updateLayout } from "@/redux/features/layout-slice";
import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ComponentEditor = ({ component, triggerLayoutDispatch, setTriggerLayoutDispatch }) => {
    const state = useSelector(state => state.dataReducer.value);
    const layoutState = useSelector(state => state.layoutReducer.value);
    const dispatch = useDispatch();
    const currentLayout = layoutState.layouts[state.focusedItem.id];

    // Welcome State
    const [welcomeText, setWelcomeText] = useState(currentLayout.welcomeText);

    useEffect(() => {
        if (triggerLayoutDispatch) {
            
            const newLayout = { ...currentLayout, 
                welcomeText: welcomeText,
             };
            
             // Reset trigger and layoutUpdated watcher
            dispatch(updateLayout({ layoutId: state.focusedItem.id, layoutData: newLayout }))
            dispatch(editLayoutUpdated(false))
            setTriggerLayoutDispatch(false);
        }
    }, [triggerLayoutDispatch])
    
    useEffect(() => {
        if (welcomeUpdated()) {
            dispatch(editLayoutUpdated(true))
        } else {
            dispatch(editLayoutUpdated(false))
        }
    }, [welcomeText])

    const welcomeUpdated = () => { return welcomeText !== currentLayout.welcomeText }


    return (
        <div className="bg-white rounded-lg w-1/2 h-fit transition-all duration-300 p-2">
            <h1 className="font-semibold">{component} Settings</h1>
            {component == "Welcome" && <WelcomeSettings welcomeText={welcomeText} setWelcomeText={setWelcomeText} />}
        </div>
    )
}

const WelcomeSettings = ({welcomeText, setWelcomeText}) => {
    return (
        <div className="p-2 rounded-lg bg-gray-200">
            <label htmlFor="welcome-title">Welcome Title</label>
            <input id="welcome-title" type="text" className="w-full rounded-lg border-2 border-gray-300 p-2" />
            <label htmlFor="welcome-text">Welcome Text</label>
            <textarea value={welcomeText} onChange={(e) => setWelcomeText(e.target.value)} id="welcome-text" className="w-full rounded-lg border-2 border-gray-300 p-2" />
        </div>
    )
}

export default ComponentEditor
