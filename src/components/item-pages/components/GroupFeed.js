import { createFeedPost } from "@/redux/features/layout-slice"
import Image from "next/image"
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { formatDistanceToNow, parseISO } from 'date-fns';
import { BiImageAdd } from "react-icons/bi"


const GroupFeed = ({ isAdmin, currentLayout }) => {
    const [postText, setPostText] = useState("")
    const [uploadedImage, setUploadedImage] = useState(null);

    const state = useSelector((state) => state.dataReducer.value)
    const dispatch = useDispatch();



    const Post = ({ imageOne, imageTwo, postText, timestamp, posterId }) => {
        return (
            <div className="bg-white w-full min-h-min rounded-lg p-4">
                <section className="h-12 caret-lime-200 flex flex-row">
                    <div className="relative aspect-square w-1/12 rounded-full overflow-hidden">
                        <Image alt="User Profile Picture" fill className="object-cover" src={state.users[posterId].thumbnail} />
                    </div>
                    <div className="px-4">
                        <h2 className="font-semibold">{state.users[posterId].name}</h2>
                        <p className="text-gray-500">{timestamp}</p>
                    </div>
                </section>
                <section className="py-4 text-md">
                    <p>{postText}</p>
                    {imageOne && <div className="flex flex-row gap-4">

                        <div className="mt-4 w-1/2 h-44 rounded-lg overflow-hidden relative">
                            <Image alt="Post Image" fill className="object-cover" src={imageOne} />
                        </div>
                        {imageTwo && <div className="mt-4 w-1/2 h-44 rounded-lg overflow-hidden relative">
                            <Image alt="Post Image" fill className="object-cover" src={imageTwo} />
                        </div>}
                    </div>}
                </section>
            </div>
        )
    }

    const handlePostClick = () => {
        const currentTimestamp = Date.now();
        const dateObject = new Date(currentTimestamp);
        const timestamp = dateObject.toISOString();
        console.log("Creating post, image:", uploadedImage);

        dispatch(createFeedPost({ layoutId: state.focusedItem.id, postText, timestamp, poster: state.userId, imageOne: uploadedImage }));
        setPostText("");
        setUploadedImage(null);
    }


    const handleImageFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setUploadedImage(event.target.result)
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className="bg-gray-200 w-full h-full p-4 flex flex-col gap-4 max-h-full overflow-y-scroll">
            {isAdmin && <CreatePostComponent postText={postText} setPostText={setPostText} handlePostClick={handlePostClick} handleImageFileChange={handleImageFileChange} />}
            {/* Render out each post */}
            <div className="flex flex-col-reverse gap-4">
                {currentLayout["feedList"].map((post) => {
                    const parsedTimestamp = parseISO(post.timestamp)
                    const formattedTimestamp = formatDistanceToNow(parsedTimestamp, { addSuffix: true });
                    return <Post postText={post.text} timestamp={formattedTimestamp} posterId={post.poster} imageOne={post.imageOne} />
                })}
            </div>

            {/* <Post postText={"The group went to the bar for a little after party!"} imageOne="/eventImages/game.jpg" imageTwo="/eventImages/pub.jpg" />
            <Post postText={"Next week's event is postponed due to the storm 😞"} />
            <Post postText={"Make sure to bring in your resumes this weekend we have recruiters stopping by!"} />
            <Post postText={"Hey guys we are working downtown today come join us!"} imageOne="/groupImages/design.jpg" />
            <Post postText={"The group name was updated to 'Design Group'"} /> */}
        </div>
    )
}

const CreatePostComponent = ({ postText, setPostText, handlePostClick, handleImageFileChange }) => {
    const imageUploadRef = useRef(null);

    const handleImageUploadClick = () => {
        imageUploadRef.current.click();
    }

    return (
        <div className="bg-white w-full min-h-min rounded-lg p-4 flex flex-col gap-2">
            <div className="flex flex-row gap-4">
                <div className="relative aspect-square w-1/12 rounded-full overflow-hidden">
                    <Image fill className="object-cover" src="/userImages/pfp-test-11.jpg" />
                </div>
                <input type="text" value={postText} onChange={(e) => setPostText(e.target.value)} placeholder="Create a Post..." className="bg-gray-100 outline-none px-2 w-full rounded-lg" />
            </div>
            {postText && <div className="flex flex-row items-center gap-2 justify-end">
                <button onClick={handleImageUploadClick} className="rounded-lg hover:bg-gray-200 p-1 transition-all duration-150"><BiImageAdd size="25" /></button>
                <input type="file" ref={imageUploadRef} onChange={handleImageFileChange} className="hidden" />
                <button onClick={handlePostClick} className="bg-black w-20 text-white px-2 py-1 text-sm rounded-lg hover:bg-opacity-70">Post</button>
            </div>}

        </div>
    )
}


export default GroupFeed
