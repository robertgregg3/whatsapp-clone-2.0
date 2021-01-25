// intial datat in the data layer shows no (null) user - not logged in
export const initialState = {
  user: null,
};

// actions that when used push info into the data layer. You can have multiple actions that do different things (switch/cases below)
export const actionTypes = {
  SET_USER: "SET_USER",
};

// function that does actions depending on what action is initiated.
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: // if set user is initiated
      return {
        ...state, // return the initial state plus the user
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
