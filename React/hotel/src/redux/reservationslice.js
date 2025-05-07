import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  checkIn: null,
  checkOut: null,
  guestCount: {
    adults: 1,
    children: 0,
  },
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuestCount: (state, action) => {
      state.guestCount = action.payload;
    },
  },
});

export const { setCheckIn, setCheckOut, setGuestCount } =
  reservationSlice.actions;

export default reservationSlice.reducer;
