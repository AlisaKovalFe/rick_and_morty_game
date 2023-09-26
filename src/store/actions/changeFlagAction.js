import { mainTypes } from './actionTypes';

export const changeFlagAC = (flag) => ({
    type: mainTypes.CHANGE_FLAG,
    payload: flag
})
