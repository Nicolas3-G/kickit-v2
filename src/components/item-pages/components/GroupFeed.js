import Image from "next/image"
import React from 'react'

const GroupFeed = ({ isAdmin }) => {

    const Post = ({imageOne, imageTwo, postText}) => {
        return (
            <div className="bg-white w-full min-h-min rounded-lg p-4">
                <section className="h-12 caret-lime-200 flex flex-row">
                    <div className="relative aspect-square w-1/12 rounded-full overflow-hidden">
                        <Image fill className="object-cover" src="/userImages/pfp-test-11.jpg" />
                    </div>
                    <div className="px-4">
                        <h2 className="font-semibold">Announcer Bot</h2>
                        <p className="text-gray-500">Post metadata</p>
                    </div>
                </section>
                <section className="py-4 text-md">
                    <p>{postText}</p>
                    {imageOne && <div className="flex flex-row gap-4">

                        <div className="mt-4 w-1/2 h-44 rounded-lg overflow-hidden relative">
                            <Image fill className="object-cover" src={imageOne} />
                        </div>
                        {imageTwo && <div className="mt-4 w-1/2 h-44 rounded-lg overflow-hidden relative">
                            <Image fill className="object-cover" src={imageTwo} />
                        </div>}
                    </div>}
                </section>
            </div>
        )
    }

    return (
        <div className="bg-gray-200 w-full h-full p-4 flex flex-col gap-4 max-h-full overflow-y-scroll">
            {isAdmin && <div>ADMIN</div>}
            <Post postText={"The group went to the bar for a little after party!"} imageOne="/eventImages/game.jpg" imageTwo="/eventImages/pub.jpg" />
            <Post postText={"Next week's event is postponed due to the storm 😞"} />
            <Post postText={"Make sure to bring in your resumes this weekend we have recruiters stopping by!"}/>
            <Post postText={"Hey guys we are working downtown today come join us!"} imageOne="/groupImages/design.jpg"/>
            <Post postText={"The group name was updated to 'Design Group'"}/>
        </div>
    )
}

export default GroupFeed
