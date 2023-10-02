import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { mainReducer } from './reducers/mainReducer';
import { rightAnswersReducer } from './reducers/rightAnswersReducer'
import { wrongAnswersReducer } from './reducers/wrongAnswersReducer'
import { flagReducer } from './reducers/flagReducer'

const reducer = combineReducers({
  mainStore: mainReducer,
  rigthAnswersStore: rightAnswersReducer,
  wrongAnswersStore: wrongAnswersReducer,
  flagStore: flagReducer
});

export const store = configureStore({ reducer });
