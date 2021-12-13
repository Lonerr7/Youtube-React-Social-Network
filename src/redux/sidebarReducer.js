const initialState = {
  friends: [
    {
      id: 1,
      name: "Vanya",
      avatar:
        "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
    },
    {
      id: 2,
      name: "Andrew",
      avatar:
        "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
    },
    {
      id: 3,
      name: "Dima",
      avatar:
        "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
