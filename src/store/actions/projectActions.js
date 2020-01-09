export const createProject = project => {
  return (dispatch, setState) => {
    // make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
