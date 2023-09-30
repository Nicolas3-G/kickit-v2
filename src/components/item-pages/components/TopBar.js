import React from 'react'
import Image from 'next/image';
import { useSelector } from "react-redux";

const TopBar = ({ itemData }) => {
    const state = useSelector((state) => state.dataReducer.value);

    const groupData = state.groups[itemData.groupId];


    return (
        <div className="w-full bg-transparent flex flex-row justify-between h-20 py-2 items-center">
            <div>
                <h1 className="text-lg font-bold text-white">{itemData.title}</h1>
                <div className="ml-2 gap-2 flex flex-row items-center min-h-max">
                    {/* based on item type decide text used */}
                    <p>{itemData.type == "event" ? "Organized By" : itemData.type == "creation" ? "Made By" : "Organizors"}:</p>
                    <div className="relative h-8 w-8 overflow-hidden">
                        <Image className="rounded-full object-cover" fill sizes="5vw" src={groupData ? groupData.thumbnail : "/eventImages/game.jpg"} />
                    </div>
                    {!groupData && <p className="bg-black text-white rounded-lg text-sm px-1">{state.users[itemData.ownerId].name}</p>}
                    {groupData && <p className="bg-black text-white rounded-lg text-sm px-1">{groupData.title}</p>}
                </div>
            </div>
            <div className="flex flex-row gap-2 w-1/6">
                <button className="px-4 py-2 flex-1 bg-blue-500 text-white rounded-sm bg-opacity-70 hover:bg-opacity-100">Like</button>
                <button className="px-4 py-2 flex-1 bg-red-500 text-white rounded-sm bg-opacity-70 hover:bg-opacity-100">Share</button>
            </div>
        </div>
    )
}

export default TopBar
