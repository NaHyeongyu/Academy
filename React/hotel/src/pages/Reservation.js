import React from "react";
import ReservationHeader from "../components/Reservation_Contents/ReservationHeader";
import ReservationFooter from "../components/Reservation_Contents/ReservationFooter";
import ReservationRoom from "../components/Reservation_Contents/ReservationRoom";

function Reservation() {
  return (
    <div>
      <ReservationHeader></ReservationHeader>
      <ReservationRoom></ReservationRoom>
      <ReservationFooter></ReservationFooter>
    </div>
  );
}

export default Reservation;
