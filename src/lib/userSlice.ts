import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  _id: string;
  clerkId: string;
  name: string;
  email: string;
  role: string;
  tasks: any[];
  createdAt: string;
}

const initialState: UserState = {
  _id: "n/a",
  clerkId: "n/a",
  name: "n/a",
  email: "n/a",
  role: "n/a",
  tasks: [],
  createdAt: "n/a",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    clearUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;