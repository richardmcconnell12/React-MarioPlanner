const initState = {
  projects: [
    {
      id: "1",
      title: "Help find Peach!",
      content: "Peach needs our help, Mario!"
    },
    {
      id: "2",
      title: "Collect all the stars",
      content: "You need 50 stars to face Bowser"
    },
    {
      id: "3",
      title: "Egg hunt with Yoshi",
      content: "Yoshi needs help finding all the eggs."
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
