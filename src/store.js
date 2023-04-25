import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = {
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk, logger],
});

export default store;