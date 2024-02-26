// permissionsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './store';

interface Permission {
  id: string;
  name: string;
  description: string;
}

interface PermissionsState {
  permissions: Permission[];
}

const initialState: PermissionsState = {
  permissions: [],
};

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setPermissions: (state, action: PayloadAction<Permission[]>) => {
      state.permissions = action.payload;
    },
  },
});

export const { setPermissions } = permissionsSlice.actions;

export const fetchPermissions = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get<{ permissions: Permission[] }>('https://sheba-app.onrender.com/api/permissions');
    dispatch(setPermissions(response.data.permissions));
  } catch (error) {
    console.error('Error fetching permissions:', error);
  }
};

export const selectPermissions = (state: RootState) => state.permissions.permissions;

export default permissionsSlice.reducer;
