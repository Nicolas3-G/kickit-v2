import React, { useEffect, useState } from 'react'

const GroupEditorOverlay = () => {
    const [animateOverlay, setAnimateOverlay] = useState(true);

    useEffect(() => {
        const animateTimer = setTimeout(setAnimateOverlay(false), 100)

        return () => clearTimeout(animateTimer);
    }, [])

    return (
        <div className={`w-full bg-gray-200 bg-opacity-80 backdrop-blur-lg top-0 left-0 absolute z-50 min-h-max h-full p-8 pb-0 transition-all duration-500 overflow-hidden ${animateOverlay ? "translate-x-full" : null}`}>

        </div>
    )
}

export default GroupEditorOverlay
