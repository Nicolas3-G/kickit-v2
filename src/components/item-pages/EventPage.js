import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { StateContext } from '@/app/page';
import Image from 'next/image';
import TopBar from "./components/TopBar";
// Icon Imports
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineShop, AiOutlineLike } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { ImTicket } from 'react-icons/im';
import { useDispatch, useSelector } from "react-redux";
import { joinEvent, updateFocusedItem } from "@/redux/features/data-slice";

const EventPage = () => {
  const [itemData, setItemData] = useState(null);
  const [memberArray, setMemberArray] = useState([]);
  const [isAttending, setIsAttending] = useState(false);
  const [parentGroupData, setParentGroupData] = useState(null);

  const state = useSelector((state) => state.dataReducer.value)
  const dispatch = useDispatch();

  // Gets focused item data from state
  useEffect(() => {
    const item = state.events[state.focusedItem.id];
    const parentGroup = state.groups[item.groupId];
    setItemData(item);
    setParentGroupData(parentGroup);
  }, [state]);

  useEffect(() => {
    const item = state.events[state.focusedItem.id];
    if (item.members.includes(state.userId)) {
      setIsAttending(true)
    }

    let generatedArray = [];
    item.members.forEach((memberId) => {
      const member = state.users[memberId];
      // Otherwise add the user to the existing array
      generatedArray.push(member)
    })
    console.log("Setting state member array:", generatedArray)
    setMemberArray(generatedArray)
  }, [itemData]);

  const handleJoinEventClick = () => {
    const response = dispatch(joinEvent({ eventId: itemData.id, userId: state.userId }));
    console.log("Response join event:", response)
    setIsAttending(true);
  }

  const handleViewGroupClick = () => {
    dispatch(updateFocusedItem({ item: { id: itemData.groupId, type: "group" } }))
  }

  return (
    <div>
      {itemData && <>
        <TopBar itemData={itemData} />
        <div className="w-full bg-white h-[160vh]">
          <div className="relative bg-red-300 h-2/5 w-full">
            <Image src={itemData.thumbnail} fill className="object-cover" />
          </div>
          <div className="flex p-8 flex-row w-full">
            <article className="w-3/6">
              <h2>Thursday, September 21st</h2>
              <h1 className="text-4xl font-bold mb-4">{itemData.title}</h1>
              <p className="text-md text-gray-500">Enim aliqua incididunt laboris deserunt minim elit id duis anim culpa quis non cupidatat veniam. Exercitation cupidatat elit do sunt aliqua eiusmod ad eu cupidatat excepteur sint cillum mollit. Cillum veniam occaecat non irure elit Lorem consequat culpa irure pariatur fugiat excepteur cupidatat laboris. Sint quis exercitation ipsum excepteur proident nulla ad. Cupidatat ad laborum est Lorem duis aliqua laborum eu. Dolor Lorem est et aute veniam. Adipisicing ex laboris culpa in proident fugiat labore voluptate duis eu.

                Lorem reprehenderit incididunt anim elit magna ullamco eu ex nisi id do duis adipisicing. Exercitation occaecat commodo adipisicing ad ut sunt Lorem consequat ut cillum. Sint tempor ea culpa consectetur excepteur. Qui excepteur deserunt consequat excepteur velit duis non occaecat. Proident adipisicing enim mollit non deserunt enim elit velit incididunt eiusmod laboris anim. Duis sint Lorem ad reprehenderit id sint exercitation laborum qui consectetur non aliquip. Reprehenderit consectetur culpa veniam fugiat consectetur qui ullamco proident.

                Cillum officia fugiat dolor tempor mollit mollit amet occaecat ex sunt. Aliqua labore sint et nostrud dolor nisi magna reprehenderit occaecat qui labore proident id. Est ea exercitation deserunt labore eiusmod culpa esse laboris incididunt laborum. Laboris ipsum nisi minim dolor ex Lorem sit excepteur commodo. Fugiat laborum pariatur qui excepteur qui id enim. Fugiat sint sint ullamco quis id anim reprehenderit sit enim aliqua ut nisi non. Ullamco consequat consectetur tempor anim exercitation incididunt voluptate.</p>
              <section className="flex flex-row gap-2 py-4">
                <Tag value="Dating" />
                <Tag value="Social" />
                <Tag value="Casual" />
                <Tag value="Fun" />
                <Tag value="Singles" />
              </section>
            </article>
            <aside className="ml-auto w-2/5">
              <div className="flex flex-row gap-4">
                <article className="p-4 flex-1 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-md">
                  <h2 className="font-semibold text-lg">When</h2>
                  <div className="flex gap-2 flex-row items-center">
                    <AiOutlineCalendar size={18} />
                    <p>Thursday, September 21st</p>
                  </div>
                  <div className="flex gap-2 flex-row items-center">
                    <AiOutlineClockCircle size={18} />
                    <p>4:00pm - 6:00 pm</p>
                  </div>
                </article>
                <article className="p-4 flex-1 bg-gradient-to-br from-green-200 to-blue-200 rounded-md">
                  <h2 className="font-semibold text-lg">Where</h2>
                  <div className="flex text-sm gap-2 flex-row items-center" >
                    <IoLocationOutline size={24} />
                    <p>1234 Main St.  San Francisco, CA 94110</p>
                  </div>
                  <div className="flex text-sm gap-2 flex-row items-center" >
                    <AiOutlineShop size={18} />
                    <p>Muddy Waters Cafe</p>
                  </div>
                </article>
              </div>
              <section className="my-4">
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="font-semibold text-lg">Who&apos;s Going?</h2>
                  <p className="text-sm text-gray-400">{itemData.members.length} Attending</p>
                  {isAttending && <p className="text-sm text-orange-400 font-semibold">- You&apos;re going</p>}
                </div>
                <div className="border px-4 h-1/5 rounded-md flex flex-row items-center gap-4">
                  {memberArray.map((member, idx) => {
                    return (
                      <div key={idx} className="flex flex-col h-full items-center justify-between p-2">
                        <div className="w-10 h-10 relative">
                          <Image src={member.thumbnail} fill className="rounded-full object-cover" />
                        </div>
                        <p>{member.name}</p>
                      </div>
                    )
                  })}
                </div>
              </section>
              <section className="my-4">
                <h2 className="font-semibold text-lg">Organizer</h2>
                <div className="flex flex-col items-center py-8 gap-2">
                  <div className="h-24 w-24 relative">
                    <Image src={parentGroupData.thumbnail} fill className="rounded-full object-cover" />
                  </div>
                  <h3 className="font-bold text-xl">{parentGroupData.title}</h3>
                  <div className="w-1/3 justify-center flex flex-row gap-4 px-2">
                    <OrganizorStat value="10" icon={<FaUserFriends size={18} />} />
                    <OrganizorStat value="2.3k" icon={<AiOutlineLike size={18} />} />
                    <OrganizorStat value="132" icon={<FiEye size={18} />} />
                  </div>
                </div>
              </section>
              <section className="flex flex-row gap-8">
                <button onClick={handleJoinEventClick} className="w-2/5 h-12 block border bg-gradient-to-br from-yellow-300 to-orange-500 rounded-md m-2 mx-auto hover:opacity-100 opacity-75">
                  <div className="p-1 text-black rounded-xl flex flex-row items-center justify-center gap-2">
                    <ImTicket size={18} />
                    <span className="font-semibold">{isAttending ? "Joined!":"Join Event"}</span>
                  </div>
                </button>
                <button onClick={handleViewGroupClick} className="w-2/5 h-12 block border bg-gradient-to-br from-pink-300 to-red-500 rounded-md m-2 mx-auto hover:opacity-100 opacity-75">
                  <div className="p-1 text-black rounded-xl flex flex-row items-center justify-center gap-2">
                    <FaUser size={18} />
                    <span className="font-semibold">View Group</span>
                  </div>
                </button>
              </section>
            </aside>
          </div>
        </div>
      </>}
    </div>
  )
}

const OrganizorStat = ({ icon, value }) => {
  return (
    <div className="flex flex-col items-center flex-1 w">
      {icon}
      <p>{value}</p>
    </div>
  )
}

const Tag = ({ value }) => {
  return (
    <span className="px-4 text-xs py-2 bg-orange-200 text-orange-600 rounded-md">{value}</span>
  )
}

export default EventPage
