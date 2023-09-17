import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';



const AddGroup = () => {
    const [showCard, setShowCard] = useState(false);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(null);
    const [groupName, setGroupName] = useState("");
    const [groupTags, setGroupTags] = useState(null);
    const location = "san francisco"


    useEffect(() => {
        setShowCard(true);
    }, []);

    useEffect(() => {
        console.log("Page:", page);
    }, [page]);

    const handleFormButtonClick = (e, value) => {
        e.stopPropagation();
        if (page == 3) return;
        if (page == 1) setCategory(value);
        setPage(page + 1);
    }

    const handleBackButtonClick = (e) => {
        e.stopPropagation();
        setPage(page - 1);
    }

    const handleCreateClick = (nameInput) => {
        console.log("Create Group", category, location, nameInput);
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
                    <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)}  className="border border-gray-300 bg-gray-200 rounded-md h-10 w-full px-4" />
                    <h4 className="font-semibold text-sm">Group Tags</h4>
                    <input className="border border-gray-300  bg-gray-200 rounded-md h-10 w-full px-4" />
                    <button onClick={() => handleCreateClick(nameInput)} className="block h-12 w-full border bg-gradient-to-br from-yellow-300 to-orange-500 rounded-md m-2 mx-0">Create</button>
                    <button onClick={handleBackButtonClick}>Back</button>
                </div>
            </div>
        )
    }
    


    return (
        <div className="flex flex-row h-screen items-center">
            <div onClick={(e) => e.stopPropagation()} className={`h-4/6 w-[27%] overflow-hidden bg-white rounded-sm mx-auto ${showCard ? 'scale-100' : 'scale-0'} transition-transform duration-300`}>
                <PageHolder page={page}>
                    <PageOne />
                    <PageTwo />
                    <PageThree/>
                </ PageHolder>
            </div>
        </div>
    );
};



const PageHolder = ({ children, page }) => {
    return (
        <div className={`grid w-[300%] grid-cols-3 absolute ${page == 2 ? "-translate-x-1/3" : page == 3 ? "-translate-x-2/3" : null} transition-all duration-500`}>
            {children}
        </div>
    )
}

const FormButton = ({ option, image, handleFormButtonClick }) => {
    return (
        <div onClick={(e) => handleFormButtonClick(e, option)} className="border border-gray-300 rounded-md h-16 w-full flex flex-row items-center px-4 justify-between m-2 mx-0 hover:bg-gray-200">
            <div className="relative w-4/6 h-full flex flex-row items-center">
                <div className="relative w-3/12 h-full max-h-full">
                    <Image layout='fill' objectFit='cover' src={image} />
                </div>
                <p className="capitalize ml-2">{option}</p>
            </div>
            <AiOutlineArrowRight size="20" />
        </div>
    )
}



const ImageUpload = () => {
    return (
        <div className="w-full border rounded-md h-2/5 grid place-items-center hover:bg-gray-200 group">
            <div className="flex items-center flex-col group-hover:scale-105 transition-all duration-300">
                <FcAddImage size="44" />
                <p className="font-bold text-sm">Upload Image</p>
            </div>
        </div>
    )
}

export default AddGroup;
