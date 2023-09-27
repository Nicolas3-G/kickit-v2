import Image from "next/image"
import React from 'react'

const GroupFeed = () => {

    const Post = () => {
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
                    <p>A new event was added "Designer Meetup" at 4:00pm Friday!</p>
                    <div className="flex flex-row gap-4">

                        <div className="mt-4 w-1/2 h-44 rounded-lg overflow-hidden relative">
                            <Image fill className="object-cover" src="/eventImages/dating.jpg" />
                        </div>
                        <div className="mt-4 w-1/2 h-44 rounded-lg overflow-hidden relative">
                            <Image fill className="object-cover" src="/eventImages/dating.jpg" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="bg-gray-200 w-1/2 h-full p-4">
            <Post />
        </div>
    )
}

export default GroupFeed
