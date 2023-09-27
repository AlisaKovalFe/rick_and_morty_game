import { mainTypes } from '../actions/actionTypes';

const initialState = {
    flag: true
};

export function flagReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.CHANGE_FLAG: {
            return { ...state, flag: action.payload};
        }

        default: {
          return state;
        }
      }
  }