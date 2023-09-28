const initialReducerState = {
    value: {
        groups: {
            1: { id: 1, title: "Westlake Dance", type: "group", desc: "Expansive dance community, with shows and daily classes!", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/groupImages/dance.jpg" },
            2: { id: 2, title: "Zari Meditation", type: "group", desc: "Meditation group with weekly open-air events", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/groupImages/yoga.jpg" },
            3: { id: 3, title: "Design Group", type: "group", desc: "Join a group of design-minded folks who love what they do!", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/groupImages/design.jpg" },
        },
        // groupLayoutData: new Map([
        //     [1, { id: 1, noteCard: { title: "Welcome", text: "Test Text" } }],
        //     [2, { id: 2, noteCard: { title: "Welcome 2", text: "Test Text" } }],
        //     [3, { id: 3, noteCard: { title: "Welcome 3", text: "Test Text" } }],
        // ]),
        events: {
            1: { id: 1, title: "Game Night @ O'Mally's", type: "event", desc: "Broad games and drinks, come on down!", members: [1, 2], ownerId: 2, thumbnail: "/eventImages/game.jpg", likes: 15 },
            2: { id: 2, title: "Pub Crawl", type: "event", desc: "Bi-weekly pub crawl around downtown SF. Register now.", members: [1], ownerId: 2, thumbnail: "/eventImages/pub.jpg", likes: 132 },
            3: { id: 3, title: "Casual Speed Dating", type: "event", desc: "Come work on your rizzling with other singles", members: [1, 2, 3], ownerId: 2, thumbnail: "/eventImages/dating.jpg", likes: 241 },
        },
        creations: {
            1: { id: 1, title: "Flower Painting", type: "creation", desc: "Worked on this the other day at muddy's!", members: [], ownerId: 1, thumbnail: "/creationImages/flower.jpg" },
            2: { id: 2, title: "Handmade Plate", type: "creation", desc: "Unleashed my creativity with handcrafted pottery at our meetup.", members: [], ownerId: 2, thumbnail: "/creationImages/plate.jpg" },
            3: { id: 3, title: "3D Art Rendering", type: "creation", desc: "Created this awesome 3d art piece this weekend!", members: [], ownerId: 2, thumbnail: "/creationImages/3d.jpg" },
        },
        users: {
            1: { id: 1, name: "User 1", thumbnail: "/userImages/pfp-test-2.jpg" },
            2: { id: 2, name: "User 2", thumbnail: "/userImages/pfp-test-3.jpg" },
            3: { id: 3, name: "User 3", thumbnail: "/userImages/pfp-test-4.jpg" },
            4320: { id: 4320, name: "Admin", thumbnail: "/userImages/pfp-test-5.jpg" },
        },
        userId: 4320,
        focusedItem: { id: null, type: null },
        editMode: false,
    }
}

export default initialReducerState;