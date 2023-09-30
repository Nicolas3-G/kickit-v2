import { updateGroup } from "@/redux/features/data-slice";
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

const GroupEditorOverlay = ({ itemData }) => {
    const [animateOverlay, setAnimateOverlay] = useState(true);
    const [groupName, setGroupName] = useState(itemData.title);
    const [groupTagline, setGroupTagline] = useState(itemData.desc);
    const [needsSave, setNeedsSave] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const animateTimer = setTimeout(setAnimateOverlay(false), 100)
        return () => clearTimeout(animateTimer);
    }, [])

    useEffect(() => {
        if (groupName !== itemData.title || groupTagline !== itemData.desc) {
            setNeedsSave(true);
        } else {
            setNeedsSave(false);
        }
    }, [groupName, groupTagline])

    const handleSaveClick = () => {
        dispatch(updateGroup({ groupId: itemData.id, groupData: { title: groupName, desc: groupTagline } }));
        setNeedsSave(false);
    }

    const ComponentSetting = ({ title }) => {
        return (
            <button className="p-8 bg-white border-2 border-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1">
                <p className="text-lg font-semibold">{title}</p>
            </button>
        )
    }



    return (
        <div className={`w-full bg-gray-200 bg-opacity-80 backdrop-blur-lg top-0 left-0 absolute z-50 min-h-max h-full p-8 pb-0 transition-all duration-500 overflow-hidden ${animateOverlay ? "translate-x-full" : null}`}>
            <section className="flex flex-row justify-between">
                <h1 className="text-4xl font-bold">Group Overview</h1>
                {needsSave ? <button onClick={handleSaveClick} className="py-2 px-4 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-lg hover:bg-orange-300">Save Changes</button> :
                    <button className="py-2 px-4 bg-gray-200 rounded-lg">Saved</button>}
            </section>
            <section className="p-8">
                <h2 className="text-2xl font-semibold">Basic Info</h2>
                <div className="flex flex-row gap-8">
                    <SettingInput inputValue={groupName} changeFunction={setGroupName} settingTitle="Group Name" />
                    <SettingInput inputValue={groupTagline} changeFunction={setGroupTagline} settingTitle="Group Tagline" />
                </div>
                <h2 className="text-2xl font-semibold">Component Settings</h2>
                <div className="py-4 gap-8 flex flex-row">
                    <ComponentSetting title="Welcome" />
                    <ComponentSetting title="Feed" />
                    <ComponentSetting title="Upcoming" />
                    <ComponentSetting title="Highlights" />
                </div>
            </section>
        </div>
    )
}

const SettingInput = ({ settingTitle, inputValue, changeFunction }) => {
    return (
        <div className="py-4">
            <p className="font-semibold text-gray-500">{settingTitle}</p>
            <input value={inputValue} onChange={(e) => changeFunction(e.target.value)} className="p-4 rounded-xl outline-gray-200" type="text" />
        </div>
    )
}

export default GroupEditorOverlay
