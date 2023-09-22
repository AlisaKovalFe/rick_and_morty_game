import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { mainReducer } from './reducers/mainReducer';
import { rightAnswersReducer } from './reducers/rightAnswersReducer'
import { wrongAnswersReducer } from './reducers/wrongAnswersReducer'

const reducer = combineReducers({
  mainStore: mainReducer,
  rigthAnswersStore: rightAnswersReducer,
  wrongAnswersStore: wrongAnswersReducer
});

export const store = configureStore({ reducer });
