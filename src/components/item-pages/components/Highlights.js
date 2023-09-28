import React, { useEffect, useState } from 'react'

const Highlights = () => {
    const [highlightIndex, setHighlightIndex] = useState(1);

    const changeIndex = () => {
        setHighlightIndex((prev) => {
            if (prev == 3) {
                return 1
            } else return prev + 1;
        })
    }

    useEffect(() => {
        const cardInterval = setInterval(changeIndex, 5000);
      
        return () => clearInterval(cardInterval);
      }, []);


    const Highlight = ({title, myIndex, currentIndex}) => {
        return (
            <div className="bg-white w-3/5 mx-auto m-2 shadow-lg shadow-gray-400 overflow-hidden rounded-md transition-all duration-500">
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


    return (
        <div>
            <h2 className="font-bold text-lg" onClick={changeIndex}>Highlights</h2>
            <div className="grid place-items-center p- h-96 flex-1 ">
                <section className="h-4/5 w-4/5 overflow-hidden transition-all duration-300">
                    <HighlightHolder index={highlightIndex}>
                        <Highlight title="one" currentIndex={highlightIndex} myIndex="1" />
                        <Highlight title="two" currentIndex={highlightIndex} myIndex="2"/>
                        <Highlight title="three" currentIndex={highlightIndex} myIndex="3" />
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