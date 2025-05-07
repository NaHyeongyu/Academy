import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationslice";

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});

export default store;
