// store.ts

// store.js
import { configureStore } from '@reduxjs/toolkit';
import permissionsReducer from './slice/permissionsSlice';

export default configureStore({
  reducer: {
    permissions: permissionsReducer
  }
});
