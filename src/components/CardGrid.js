import React, { useContext, useState, useEffect } from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineLike } from 'react-icons/ai'
import { StateContext } from "@/app/page";
import Image from 'next/image'



const CardGrid = () => {
    const [feedElements, setFeedElements] = useState([]);
    const { state } = useContext(StateContext);

    useEffect(() => {
        generateFeed();
    }, []);

    const generateFeed = () => {
        // Randomly selects a dataset (events/groups/creations) and pops a value off and add its to the feedElements
        let feedElements = [];
        while (feedElements.length < 8) {
            const randomNumber = Math.floor(Math.random() * 3);
            const elementChoices = [state.groups, state.events, state.creations];
            const randomIndex = Math.floor(Math.random() * elementChoices[randomNumber].size) + 1;
            // Select element with random number for dataset choide and random index for element choice
            const feedElement = elementChoices[randomNumber].get(randomIndex);

            if (feedElement && !feedElements.includes(feedElement)) {
                feedElements.push(feedElement);
            }
        }
        console.log("Feed Elements:", feedElements);
        setFeedElements(feedElements);
    }

    return (
        <div className="grid grid-cols-4 gap-6 w-[97%] m-auto mt-16 pb-16">
            {feedElements.map((feedElement, idx) => {
                return (
                    <Card key={idx} title={feedElement.title} thumbnail={feedElement.thumbnail} />
                )
            })}
        </div>
    )
}

const Card = ({ title, thumbnail }) => {
    return (
        <div className="hover:scale-105 transition-all duration-150">
            <div className="relative overflow-hidden rounded-sm h-64 w-full">
                <Image layout='fill' objectFit='cover' src={thumbnail} />
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-xs">Hosting group name</p>
                </div>
                <div className="flex flex-row gap-2 items-start">
                    <CardStat icon={<HiUserGroup size="16" />} />
                    <CardStat icon={<AiOutlineLike size="16" />} />
                </div>
            </div>
        </div>
    )
}

const CardStat = ({ icon }) => {
    return (
        <div className="flex flex-row items-center">
            {icon}
            <p className="ml-1">10</p>
        </div>
    )
}

export default CardGrid;