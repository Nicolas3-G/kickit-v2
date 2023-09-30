import React, { useEffect, useState } from 'react'

const Highlights = () => {
    const [highlightIndex, setHighlightIndex] = useState(1);
    const [paused, setPaused] = useState(false);

    const changeIndex = () => {
        console.log("Changing index", paused);

        setHighlightIndex((prev) => {
            if (paused) return prev;
            if (prev == 3) {
                return 1
            } else return prev + 1;
        })
    }

    useEffect(() => {
        console.log("Rerendered component")
        const cardInterval = setInterval(changeIndex, 5000);
      
        return () => clearInterval(cardInterval);
      }, []);


    // Working on pausing the card switch when user is hovering but having an issue with the state going back to false each time we check it
    useEffect(() => {
        console.log("Paused:", paused)
    }, [paused])





    return (
        <div>
            <h2 className="font-bold text-lg" onClick={changeIndex}>Highlights</h2>
            <div className="grid place-items-center p- h-96 flex-1 ">
                <section className="h-4/5 w-4/5 overflow-hidden transition-all duration-300">
                    <HighlightHolder index={highlightIndex}>
                        <Highlight setPaused={setPaused} title="one" currentIndex={highlightIndex} myIndex="1" />
                        <Highlight setPaused={setPaused} title="two" currentIndex={highlightIndex} myIndex="2"/>
                        <Highlight setPaused={setPaused} title="three" currentIndex={highlightIndex} myIndex="3" />
                    </HighlightHolder>
                </section>
            </div>
        </div>
    )
}

export default Highlights

const HighlightHolder = ({ children, index }) => {
    return (
        <div className={`grid w-[300%] h-full grid-cols-3 relative ${index == 2 ? "-translate-x-1/3" : index == 3 ? "-translate-x-2/3" : null} transition-all duration-700`}>
        {children}
    </div>
    )
}

const Highlight = ({title, myIndex, currentIndex, setPaused}) => {
    return (
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="bg-white w-3/5 mx-auto m-2 shadow-lg shadow-gray-400 overflow-hidden rounded-md transition-all duration-500">
            <div className="h-1/2 bg-red-300">
                Image
            </div>
            <div className="p-4 flex flex-col gap-2">
                <p className="rounded-xl bg-orange-200 text-orange-400 w-fit px-2 ">Creation</p>
                <h2 className="font-semibold">{title}</h2>
            </div>
        </div>
    )
}