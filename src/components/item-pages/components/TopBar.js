import React from 'react'
import Image from 'next/image';

const TopBar = ({ itemData }) => {
    return (
        <div className="w-full bg-transparent flex flex-row justify-between h-20 py-2 items-center">
            <div>
                <h1 className="text-lg font-bold text-white">{itemData.title}</h1>
                <div className="ml-2 gap-2 flex flex-row items-center min-h-max">
                    <p>{itemData.type == "event" ? "Organized By" : itemData.type == "creation" ? "Made By" : "Organizors"}:</p>
                    <div className="relative h-8 w-8 overflow-hidden">
                        <Image className="rounded-full object-cover" fill sizes="10vw" src="/eventImages/game.jpg" />
                    </div>
                    <p className="bg-black text-white rounded-lg text-sm px-1">Group Name</p>
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
