import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sliceReducer from './slice/Slice';

// Combine all reducers
const rootReducer = combineReducers({
  addItem: sliceReducer,
});

// Create and export the store
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
