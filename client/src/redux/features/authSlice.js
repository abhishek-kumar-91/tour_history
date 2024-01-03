import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk("auth/login", async ({ formValue, navigate }, { rejectWithValue }) => {
  try {
    const response = await api.signIn(formValue);
    navigate("/");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

export const register = createAsyncThunk("auth/register", async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  });

  export const googleSignIn = createAsyncThunk("auth/googleSignIn", async ({ result, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.googleSignIn(result);
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  });

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => { 
    state.user = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(googleSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const {setUser, setLogout} = authSlice.actions;
export default authSlice.reducer;
