import { mainTypes } from '../actions/actionTypes';

const initialState = {
  rightAnswers: [],
};

export function rightAnswersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_RIGTH_ANSWER: {
          console.log(action.payload)
          return { ...state, rightAnswers: [...state.rightAnswers, action.payload] };
        }
        
        default: {
          return state;
        }
      }
  }