import React from 'react'

const Welcome = ({ text }) => {

    return (
        <div>
            <div className="bg-gray-100 border border-gray-200 shadow-lg rounded-2xl flex-col flex p-4 shadow-gray-400 h-52 flex-1 ">
                <h2 className="font-bold text-lg">Welcome</h2>
                <section className="flex-1 flex-row flex gap-2">
                    <p className="text-gray">{text}</p>
                </section>
            </div>
        </div>
    )
}

export default Welcome
