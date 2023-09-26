import { mainTypes } from '../actions/actionTypes';

const initialState = {
    flag: true
};

export function flagReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.CHANGE_FLAG: {
            console.log(action.payload)
            return { ...state, flagBoolean: action.payload};
        }

        default: {
          return state;
        }
      }
  }