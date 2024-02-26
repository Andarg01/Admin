// shopSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from '../store';

interface Shop {
  id: string;
  name: string;
  description: string;
}

interface ShopsState {
  shops: Shop[];
}

const initialState: ShopsState = {
  shops: [],
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShops: (state, action: PayloadAction<Shop[]>) => {
      state.shops = action.payload;
    },
  },
});

export const { setShops } = shopSlice.actions;

export const fetchShops = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get<{ shops: Shop[] }>('https://sheba-app.onrender.com/api/shops/user/all');
    dispatch(setShops(response.data.shops));
  } catch (error) {
    console.error('Error fetching shops:', error);
  }
};

export const selectShops = (state: RootState) => state.shops.shops;

export default shopSlice.reducer;
