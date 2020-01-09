export const createProject = project => {
  return (dispatch, setState, { getFirebase, getFirestore }) => {
    // make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
