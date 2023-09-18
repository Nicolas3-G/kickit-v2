const initialReducerState = {
    groups: new Map([
        [1, { id: 1, title: "Westlake Dance", type: "group", desc: "Expansive dance community, with shows and daily classes!", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/groupImages/dance.jpg" }],
        [2, { id: 2, title: "Zari Meditation", type: "group", desc: "Meditation group with weekly open-air events", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/groupImages/yoga.jpg" }],
        [3, { id: 3, title: "Design Group", type: "group", desc: "Join a group of design-minded folks who love what they do!", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/groupImages/design.jpg" }],
      ]),
    groupLayoutData: new Map([
        [1, { id: 1, noteCard: {title: "Welcome", text: "Test Text"}}],
        [2, { id: 2, noteCard: {title: "Welcome 2", text: "Test Text"}}],
        [3, { id: 3, noteCard: {title: "Welcome 3", text: "Test Text"}}],
      ]),
    events: new Map ([
        [1, { id: 1, title: "Game Night @ O'Mally's", type: "event", desc: "Broad games and drinks, come on down!", members: [], ownerId: 2, thumbnail: "/eventImages/game.jpg"}],
        [2, { id: 2, title: "Pub Crawl", type: "event", desc: "Bi-weekly pub crawl around downtown SF. Register now.", members: [], ownerId: 2, thumbnail: "/eventImages/pub.jpg"}],
        [3, { id: 3, title: "Casual Speed Dating", type: "event", desc: "Come work on your rizzling with other singles", members: [], ownerId: 2, thumbnail: "/eventImages/dating.jpg"}],
    ]),
    creations: new Map ([
        [1, { id: 1, title: "Flower Painting", type: "creation", desc: "Worked on this the other day at muddy's!", members: [], ownerId: 1, thumbnail: "/creationImages/flower.jpg"}], 
        [2, { id: 2, title: "Handmade Plate", type: "creation", desc: "Unleashed my creativity with handcrafted pottery at our meetup.", members: [], ownerId: 2, thumbnail: "/creationImages/plate.jpg"}],
        [3, { id: 3, title: "3D Art Rendering", type: "creation", desc: "Created this awesome 3d art piece this weekend!", members: [], ownerId: 2, thumbnail: "/creationImages/3d.jpg"}],
    ]),
    userId: 4320,
    focusedItem: {id: null, type: null},
}

export default initialReducerState;