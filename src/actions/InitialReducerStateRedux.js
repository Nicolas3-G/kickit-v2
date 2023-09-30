const initialReducerState = {
    value: {
        groups: {
            11: { id: 11, title: "Westlake Dance", type: "group", events: [24, 25], desc: "Expansive dance community, with shows and daily classes!", members: [1], ownerId: 1, thumbnail: "/groupImages/dance.jpg", likes: 28, views: 3850 },
            12: { id: 12, title: "Zari Meditation", type: "group", events: [26, 27], desc: "Meditation group with weekly open-air events", members: [2], ownerId: 2, thumbnail: "/groupImages/yoga.jpg", likes: 37, views: 4217 },
            13: { id: 13, title: "Design Group", type: "group", events: [28, 29], desc: "Join a group of design-minded folks who love what they do!", members: [3], ownerId: 3, thumbnail: "/groupImages/design.jpg", likes: 19, views: 2985 },
            14: { id: 14, title: "SF Social", type: "group", events: [21, 22, 23], desc: "Join a group of design-minded folks who love what they do!", members: [3], ownerId: 3, thumbnail: "/groupImages/sf.jpg", likes: 45, views: 5123 },
        },        
        events: {
            21: { id: 21, title: "Game Night @ O'Mally's", type: "event", groupId: 14, desc: "Board games and drinks, come on down!", members: [1, 2], thumbnail: "/eventImages/game.jpg", likes: 62, views: 4123 },
            22: { id: 22, title: "Pub Crawl", type: "event", groupId: 14, desc: "Bi-weekly pub crawl around downtown SF. Register now.", members: [1], thumbnail: "/eventImages/pub.jpg", likes: 87, views: 3219 },
            23: { id: 23, title: "Casual Speed Dating", type: "event", groupId: 14, desc: "Come work on your flirting with other singles", members: [1, 2, 3], thumbnail: "/eventImages/dating.jpg", likes: 112, views: 5467 },
            24: { id: 24, title: "Sunday Ballet", type: "event", groupId: 11, desc: "Weekly ballet classes for beginners to advanced", members: [1, 2, 3], thumbnail: "/eventImages/ballet.jpg", likes: 35, views: 2755 },
            25: { id: 25, title: "Kids Hiphop Workshop", type: "event", groupId: 11, desc: "Bring your dancers to a workshop led by experienced choreographers", members: [1, 2, 3], thumbnail: "/eventImages/hiphop.jpg", likes: 53, views: 1898 },
            26: { id: 26, title: "Hot Yoga", type: "event", groupId: 12, desc: "Sweat it out in an hour-long guided yoga/meditation", members: [1, 2, 3], thumbnail: "/eventImages/hot-yoga.jpg", likes: 78, views: 3654 },
            27: { id: 27, title: "Yogi Meetup Downtown", type: "event", groupId: 12, desc: "Meet with other Yogis in a networking environment", members: [1, 2, 3], thumbnail: "/eventImages/yogis.jpg", likes: 27, views: 2440 },
            28: { id: 28, title: "Drink & Design", type: "event", groupId: 13, desc: "Come on down to the pub and get your design on", members: [1, 2, 3], thumbnail: "/eventImages/drawing.jpg", likes: 44, views: 2987 },
            29: { id: 29, title: "Founders and Designers", type: "event", groupId: 13, desc: "Connect with founders and designers at our monthly event", members: [1, 2, 3], thumbnail: "/eventImages/network.jpg", likes: 63, views: 4189 },
        },
        creations: {
            31: { id: 31, title: "Flower Painting", type: "creation", desc: "Worked on this the other day at Muddy's!",  ownerId: 1, thumbnail: "/creationImages/flower.jpg", likes: 29, views: 1576 },
            32: { id: 32, title: "Handmade Plate", type: "creation", desc: "Unleashed my creativity with handcrafted pottery at our meetup.",  ownerId: 2, thumbnail: "/creationImages/plate.jpg", likes: 36, views: 2124 },
            33: { id: 33, title: "3D Art Rendering", type: "creation", desc: "Created this awesome 3D art piece this weekend!",  ownerId: 3, thumbnail: "/creationImages/3d.jpg", likes: 18, views: 954 },
        },        
        users: {
            1: { id: 1, name: "User 1", thumbnail: "/userImages/pfp-test-2.jpg", likeList: [] },
            2: { id: 2, name: "User 2", thumbnail: "/userImages/pfp-test-3.jpg", likeList: [] },
            3: { id: 3, name: "User 3", thumbnail: "/userImages/pfp-test-4.jpg", likeList: [] },
            4320: { id: 4320, name: "Admin", thumbnail: "/userImages/pfp-test-5.jpg", likeList: [] },
        },
        userId: 4320,
        focusedItem: { id: null, type: null },
        editMode: false,
    }
}

export default initialReducerState;