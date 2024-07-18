import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import sliceReducer from '../features/Slice';


// Combine all reducers
const rootReducer = combineReducers({
  addItem: sliceReducer,
});

// Create and export the store
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
