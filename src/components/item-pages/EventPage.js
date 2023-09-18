import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { StateContext } from '@/app/page';
import Image from 'next/image';
import TopBar from "./components/TopBar";
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineShop } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaUser, FaUserFriends } from 'react-icons/fa';


const EventPage = () => {
  const [itemData, setItemData] = useState(null);

  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    const item = state.events.get(state.focusedItem.id);
    setItemData(item);
  }, [state]);

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
                <h2 className="font-semibold text-lg">Are you going?</h2>
                <div className="flex flex-row">
                  <button className="p-1 border bg-gradient-to-br from-red-300 to-red-500 rounded-2xl m-2 mx-auto block font-semibold text-md hover:opacity-75">
                    <div className="p-1 text-black rounded-xl flex flex-row items-center gap-2">
                      <FaUser size={18} />
                      <span>I&apos;m Going!</span>
                    </div>
                  </button>
                  <button className="p-1 border bg-gradient-to-br from-red-300 to-red-500 rounded-2xl m-2 mx-auto block font-semibold text-md hover:opacity-75">
                    <div className="p-1 text-black rounded-xl flex flex-row items-center gap-2">
                      <FaUserFriends size={18} />
                      <span>I&apos;m Bringing Friends!</span>
                    </div>
                  </button>
                </div>
              </section>
              <section>
                <h2 className="font-semibold text-lg">Who&apos;s Going?</h2>
                <div className="border h-1/5 rounded-md">
                  Test
                </div>
              </section>
            </aside>
          </div>
        </div>
      </>}
    </div>
  )
}

export default EventPage
