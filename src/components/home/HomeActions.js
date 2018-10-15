import axios from "axios";
import * as API from "../../api/connect";

//URL
const LUKE = API.LUKE;

//types & Dispatch
export const LOAD_PERSON = "LOAD_PERSON";
export const loadPersonDispatch = person => {
  return { type: LOAD_PERSON, person };
};

export const loadPerson = () => {
  // return async dispatch => {
  //   try {
  //     const person = await axios.get(LUKE);
  //     return dispatch(loadPersonDispatch(person));
  //   } catch (e) {
  //     throw e;
  //   }
  // };
return(dispatch) => {
  return axios.get(LUKE)
  .then(response => {
    return response.data;
  })
  .then(person => dispatch(loadPersonDispatch(person)))
  }
};
