import {configureStore, combineReducers} from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';

const rootReducer = combineReducers({
  newsSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
