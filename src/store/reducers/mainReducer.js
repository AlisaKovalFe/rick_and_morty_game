import { mainTypes } from '../actions/actionTypes';

const initialState = {
  characters: [],
};

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_CHARACTERS: {
          return { ...state, characters: [...state.characters, action.payload] };
        }

        case mainTypes.CLEAR_CHARACTERS_STORE: {
          return { ...state, characters: [] };
        }
        
        default: {
          return state;
        }
      }
  }