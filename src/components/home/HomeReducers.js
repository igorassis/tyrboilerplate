import {
  LOAD_PERSON
} from './HomeActions';

const initialState = {
  person: []
}

export const PersonReducer = ( state = initialState.person, action) => {
  switch(action.type){
    case LOAD_PERSON:
      console.log('Person Reducer:', action.person);
      return action.person;
    default:
      return state;
  }
}

export default PersonReducer;