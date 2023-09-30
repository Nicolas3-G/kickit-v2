import { updateFocusedItem } from "@/redux/features/data-slice"
import Image from "next/image"
import React from 'react'
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"

const UpcomingEvents = ({ eventArray }) => {
    const trimmedEventArray = eventArray.slice(0, 2);
    const dispatch = useDispatch();

    const handleEventCardClick = (eventId) => {
        dispatch(updateFocusedItem({ item: { id: eventId, type: "event" } }))
    }

    const EventCard = ({ event }) => {
        return (
            <article onClick={() => handleEventCardClick(event.id)} className="h-full w-1/2 flex flex-row p-2 px-2 transition-colors duration-300 hover:shadow-lg hover:bg-gray-300 rounded-lg">
                <div className="w-1/2 flex flex-col justify-between">
                    <h3 className="font-semibold">{event.title}</h3>
                    <div className="flex flex-row text-sm text-gray-400 gap-2">
                        <div className="flex flex-row items-center gap-1"><AiOutlineCalendar size="15" />4/29</div>
                        <div className="flex flex-row items-center gap-1"><AiOutlineClockCircle size="15" />4:20pm</div>
                    </div>
                    <div className="flex flex-row items-center gap-1 text-sm text-gray-400"><IoLocationOutline size="15" />1234 Main St</div>
                    <div>
                        <UserBubbleStackedBar />
                    </div>
                </div>
                <div className="h-full rounded-lg overflow-hidden w-1/2 relative">
                    <Image fill sizes="10vw" className="object-cover" src={event.thumbnail} />
                </div>
            </article>
        )
    }


    return (
        <div className="bg-gray-100 border border-gray-200 shadow-lg rounded-2xl flex-col flex p-4 shadow-gray-400 max-h-52 h-52 ">
            <h2 className="font-bold text-lg">Upcoming Events</h2>
            <section className="flex-1 flex-row flex gap-2">
                {trimmedEventArray.map((event) => {
                    return <EventCard event={event} />
                })}
                {!trimmedEventArray.length && <p className="text-gray-400 self-center mx-auto">No upcoming events yet, check back later!</p>}
            </section>
        </div>
    )
}

const UserBubbleStackedBar = () => {
    const UserBubble = ({ id, index }) => {
        return (
            <div className={`w-7 h-7 relative rounded-full overflow-hidden ${index > 1 && "-ml-4"}`}>
                <Image fill sizes="10vw" className="object-cover" src={`/userImages/pfp-test-${id}.jpg`} />
            </div>
        )
    }

    return (
        <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center">
                <UserBubble id="3" index="1" />
                <UserBubble id="4" index="2" />
                <UserBubble id="5" index="2" />
                <UserBubble id="7" index="2" />
            </div>
            <p className="text-sm text-gray-400">+10 more</p>
        </div>
    )
}

export default UpcomingEvents
