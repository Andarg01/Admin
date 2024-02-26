// rolesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './store';

interface Role {
  id: string;
  name: string;
  description: string;
}

interface RolesState {
  roles: Role[];
}

const initialState: RolesState = {
  roles: [],
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setRoles: (state, action: PayloadAction<Role[]>) => {
      state.roles = action.payload;
    },
  },
});

export const { setRoles } = rolesSlice.actions;

export const fetchRoles = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get<{ roles: Role[] }>('https://sheba-app.onrender.com/api/roles');
    dispatch(setRoles(response.data.roles));
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

export const selectRoles = (state: RootState) => state.roles.roles;

export default rolesSlice.reducer;
