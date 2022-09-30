import { configureStore } from '@reduxjs/toolkit';
import MessageList from './messageList';

export default configureStore({
  reducer: {
    MessageList,
  },
});