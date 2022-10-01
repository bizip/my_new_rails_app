import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageReducer'

const store = configureStore({
  reducer: {
    message: messageReducer
  }
});

export default store;