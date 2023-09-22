import { mainTypes } from '../actions/actionTypes';

const initialState = {
  wrongAnswers: [],
};

export function wrongAnswersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_WRONG_ANSWER: {
          return { ...state, wrongAnswers: [...state.wrongAnswers, action.payload] };
        }

        case mainTypes.DELETE_WRONG_ANSWER: {
          const { id } = action.payload
          return { ...state, wrongAnswers: state.wrongAnswers.filter((el) => el.id !== id) };
        }
        
        default: {
          return state;
        }
      }
  }