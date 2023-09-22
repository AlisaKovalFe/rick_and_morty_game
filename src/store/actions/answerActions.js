import { mainTypes } from './actionTypes';

export const addRightAnswerAC = (answerData) => ({
    type: mainTypes.ADD_RIGTH_ANSWER,
    payload: answerData
})
  

export const addWrongAnswerAC = (answerData) => ({
type: mainTypes.ADD_WRONG_ANSWER,
payload: answerData
})
