import { mainTypes } from '../actions/actionTypes';

const initialState = {
  wrongAnswers: [],
};

export function wrongAnswersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_WRONG_ANSWER: {
          console.log(action.payload)
          return { ...state, wrongAnswers: [...state.wrongAnswers, action.payload] };
        }

        case mainTypes.CLEAR_ANSWERS_STORES: {
          return { ...state, wrongAnswers: [] };
        }
        
        default: {
          return state;
        }
      }
  }