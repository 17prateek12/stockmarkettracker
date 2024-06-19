import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post('http://localhost:5001/api/users/register', userData);
  return response.data;
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
  const response = await axios.post('http://localhost:5001/api/users/login', userData);
  return response.data;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await axios.post('http://localhost:5001/api/users/logout'); // Use POST instead of GET for logout
  return null;
});

export const checkAuthStatus = createAsyncThunk('auth/checkAuthStatus', async () => {
  const response = await axios.get('http://localhost:5001/api/users/current');
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
