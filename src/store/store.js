import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { mainReducer } from './reducers/mainReducer';
import { rightAnswersReducer } from './reducers/rightAnswersReducer'
import { wrongAnswersReducer } from './reducers/wrongAnswersReducer'
import { genderReducer } from './reducers/genderReducer'
import { statusReducer } from './reducers/statusReducer'
import { speciesReducer } from './reducers/speciesReducer'
import { flagReducer } from './reducers/flagReducer'

const reducer = combineReducers({
  mainStore: mainReducer,
  rigthAnswersStore: rightAnswersReducer,
  wrongAnswersStore: wrongAnswersReducer,
  genderStore: genderReducer,
  statusStore: statusReducer,
  speciesStore: speciesReducer,
  flagStore: flagReducer
});

export const store = configureStore({ reducer });
