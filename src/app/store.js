import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import userActionsReducer from '../features/userActionsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    userActions: userActionsReducer,
  }
});
