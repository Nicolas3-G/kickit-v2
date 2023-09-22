import { StateContext } from '@/app/page';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
import { ACTIONS } from '@/actions/actions';
import { PiConfettiFill } from 'react-icons/pi';



const AddGroup = ({ updateActiveModal }) => {
    const [showCard, setShowCard] = useState(false);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(null);
    const [groupThumbnail, setGroupThumbnail] = useState(null);
    const [createdGroupId, setCreatedGroupId] = useState(null);

    const location = "san francisco"
    const fileUploadRef = useRef(null);

    const { state, dispatch } = useContext(StateContext);

    useEffect(() => {
        setShowCard(true);
    }, []);

    const handleFormButtonClick = (value) => {
        if (page == 4) return;
        // Only on page one set the category
        if (page == 1) setCategory(value);
        setPage(page + 1);
    }

    const handleBackButtonClick = (e) => {
        e.stopPropagation();
        setPage(page - 1);
    }

    const handleGoToGroupClick = () => {
        updateActiveModal("focusItem");
        dispatch({ type: ACTIONS.UPDATE_FOCUSED_ITEM, payload: { item: { id: createdGroupId, type: "group" } } })
    }

    const handleCreateClick = (nameInput) => {
        console.log("Created Group", category, location, nameInput, groupThumbnail);
        const newGroup = { id: (state.groups.size + 1), title: `${nameInput}`, type: "group", desc: `Add description...`, members: [state.userId], ownerId: state.userId, thumbnail: groupThumbnail }
        dispatch({ type: ACTIONS.ADD_GROUP, payload: { group: newGroup } })
        setCreatedGroupId(newGroup.id);
        handleFormButtonClick(null)
    }

    const handleImageUploadClick = (e) => {
        fileUploadRef.current.click();
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setGroupThumbnail(event.target.result)
        };
        reader.readAsDataURL(file);
    }

    const ImageUpload = () => {
        return (
            <div onClick={handleImageUploadClick} className="w-full overflow-hidden border rounded-md h-2/5 grid place-items-center hover:bg-gray-200 group">
                {!groupThumbnail && <div className="flex items-center flex-col group-hover:scale-105 transition-all duration-300">
                    <FcAddImage size="44" />
                    <p className="font-bold text-sm">Upload Image</p>
                </div>}
                {groupThumbnail && <div className="bg-gray-200 w-full overflow-hidden h-full flex justify-center relative">
                    <div className="w-1/3 h-full relative">
                        <Image className="object-cover" fill sizes="50vw" alt="Group Image" src={groupThumbnail} />
                    </div>
                </div>}
            </div>
        )
    }

    const PageOne = () => {
        return (
            <div className="p-4">
                <h3 className="text-center font-semibold text-lg">Create a Group</h3>
                <p className="text-center font-light text-gray-400">
                    Make a group to organize events and members!
                </p>
                <div className="pt-4">
                    <h4 className="font-semibold text-sm">Select a Category</h4>
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="tech" image="/categoryBlobs/laptop.png" />
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="cooking" image="/categoryBlobs/pan.png" />
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="business" image="/categoryBlobs/briefcase.png" />
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="fitness" image="/categoryBlobs/dumbell.png" />
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="nature" image="/categoryBlobs/grass.png" />
                </div>
            </div>
        )
    }

    const PageTwo = () => {
        return (
            <div className="p-4">
                <h3 className="text-center font-semibold text-lg">Choose a Location</h3>
                <p className="text-center font-light text-gray-400">
                    Choose a location so members in your area can find you!
                </p>
                <div className="pt-4">
                    <h4 className="font-semibold text-sm">Select a Location</h4>
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="San Francisco" image="/locationBlobs/goldengate.png" />
                    <FormButton handleFormButtonClick={handleFormButtonClick} option="More coming soon" image="/locationBlobs/construction.png" />
                    <button onClick={handleBackButtonClick}>Back</button>
                </div>
            </div>
        )
    }

    const PageThree = () => {
        const [nameInput, setNameInput] = useState("");

        return (
            <div className="p-4">
                <h3 className="text-center font-semibold text-lg">Setup your Group</h3>
                <p className="text-center font-light text-gray-400">
                    Give us some more information so we can get your group up and running!
                </p>
                <div className="pt-4 h-4/5">
                    <ImageUpload />
                    <h4 className="font-semibold text-sm">Group Name</h4>
                    <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="border border-gray-300 bg-gray-200 rounded-md h-10 w-full px-4" />
                    <h4 className="font-semibold text-sm">Group Tags</h4>
                    <input className="border border-gray-300  bg-gray-200 rounded-md h-10 w-full px-4" />
                    <button onClick={() => handleCreateClick(nameInput)} className="block h-12 w-full border bg-gradient-to-br from-yellow-300 to-orange-500 rounded-md m-2 mx-0 hover:opacity-100 opacity-75">Create</button>
                    <button onClick={handleBackButtonClick}>Back</button>
                    <input onChange={handleImageUpload} ref={fileUploadRef} type="file" id="file" className="hidden" />
                </div>
            </div>
        )
    }

    const PageFour = () => {
        return (
            <div className="p-4">
                <div className="flex flex-col justify-center h-3/6 ">
                    <PiConfettiFill size="64" className="text-yellow-300 mx-auto" />
                    <h3 className="text-md font-semibold text-center mb-2">Group created!</h3>
                    <button onClick={handleGoToGroupClick} className="block h-12 w-full border bg-gradient-to-br from-yellow-300 to-orange-500 rounded-md m-2 mx-0 hover:opacity-100 opacity-75">Go to group</button>
                </div>
            </div>
        )
    }



    return (
        <div className="flex flex-row h-screen items-center">
            {/* Changes height on last card */}
            <div onClick={(e) => e.stopPropagation()} className={`${page != 4 ? "h-4/6" : "h-2/6"} w-[27%] overflow-hidden bg-white rounded-sm mx-auto ${showCard ? 'scale-100' : 'scale-0'} transition-all duration-300`}>
                <button onClick={() => updateActiveModal(null)} className="absolute top-2 right-2 opacity-60 hover:opacity-100 z-10">{<AiOutlineClose size="22" />}</button>
                <PageHolder page={page}>
                    <PageOne />
                    <PageTwo />
                    <PageThree />
                    <PageFour />
                </ PageHolder>
            </div>
        </div>
    );
};



const PageHolder = ({ children, page }) => {
    return (
        // Width is set to how many pages there is 2 = 200%, 3 = 300%, etc., each page translates to the left by 1/4 of the width, also depends on how many cards there are
        <div className={`grid w-[400%] grid-cols-4 absolute ${page == 2 ? "-translate-x-1/4" : page == 3 ? "-translate-x-2/4" : page == 4 ? "-translate-x-3/4" : null} transition-all duration-500`}>
            {children}
        </div>
    )
}

const FormButton = ({ option, image, handleFormButtonClick }) => {
    return (
        <div onClick={(e) => handleFormButtonClick(e, option)} className="border border-gray-300 rounded-md h-16 w-full flex flex-row items-center px-4 justify-between m-2 mx-0 hover:bg-gray-200">
            <div className="relative w-4/6 h-full flex flex-row items-center">
                <div className="relative w-3/12 h-full max-h-full">
                    <Image fill sizes="10vw" className="object-cover" alt={`${option} icon`} src={image} />
                </div>
                <p className="capitalize ml-2">{option}</p>
            </div>
            <AiOutlineArrowRight size="20" />
        </div>
    )
}

export default AddGroup;
