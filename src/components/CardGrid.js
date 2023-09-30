import React, { useState, useEffect } from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineEye, AiOutlineLike } from 'react-icons/ai'
import Image from 'next/image'
import { useSelector } from "react-redux";




const CardGrid = ({ handleItemFocus }) => {
    const [feedElements, setFeedElements] = useState([]);
    const state = useSelector((state) => state.dataReducer.value);

    useEffect(() => {
        generateFeed();
    }, []);

    const generateFeed = () => {
        // Randomly selects a dataset (events/groups/creations) and pops a value off and add its to the feedElements
        let feedElements = [];;
        while (feedElements.length < 8) {
            const randomNumber = Math.floor(Math.random() * 3);
            const elementChoices = [state.groups, state.events, state.creations];
            // Select element with random number for dataset choide and random index for element choice
            
            const dataSet = elementChoices[randomNumber];
            const dataSetKeys = Object.keys(dataSet);
            const randomIndex = Math.floor(Math.random() * dataSetKeys.length) + 1;
            const choosenElementId = dataSetKeys[randomIndex];
            const feedElement = dataSet[choosenElementId];

            if (feedElement && !feedElements.includes(feedElement)) {
                feedElements.push(feedElement);
            }
        }
        console.log("Feed Elements:", feedElements);
        setFeedElements(feedElements);
    }
    
    const Card = ({ item }) => {
        const owningGroup = state.groups[item.groupId];
        
        return (
            <div onClick={() => handleItemFocus(item)} className="hover:scale-105 transition-all duration-150">
                <div className="relative overflow-hidden rounded-sm h-64 w-full">
                    <Image fill className="object-cover" src={item.thumbnail} alt={`item.title`} sizes="25vw"/>
                </div>
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-xs">{owningGroup ? `${owningGroup.title}` : state.users[item.ownerId].name}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-start">
                        {item.members && <CardStat value={item.members.length} icon={<HiUserGroup size="16" />} />}
                        <CardStat value={item.likes} icon={<AiOutlineLike size="16" />} />
                        <CardStat value={item.views} icon={<AiOutlineEye size="16" />} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-6 w-[97%] m-auto mt-16 pb-16">
            {feedElements.map((feedElement, idx) => {
                return (
                    <Card key={idx} handleItemFocus={handleItemFocus} item={feedElement} />
                )
            })}
            <button onClick={() => generateFeed()}>Refresh</button>
        </div>
    )
}



const CardStat = ({ icon, value }) => {
    const formatNumber = (num) => {
        if (num < 1000) return num;
        if (num >= 1000 && num < 1000000) {
          const rounded = (num / 1000).toFixed(1);
          return rounded.endsWith(".0") ? rounded.slice(0, -2) + "k" : rounded + "k";
        } else if (num >= 1000000) {
          const rounded = (num / 1000000).toFixed(1);
          return rounded.endsWith(".0") ? rounded.slice(0, -2) + "m" : rounded + "m";
        } else {
          return num.toString();
        }
      };


    

    return (
        <div className="flex flex-row items-center">
            {icon}
            <p className="ml-1">{formatNumber(value)}</p>
        </div>
    )
}

export default CardGrid;