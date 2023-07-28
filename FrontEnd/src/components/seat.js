// Seat.js
import React from 'react';
import "./style.css";

const Seat = ({ seat, onClick }) => {
  return (
    <div
      className={`seat ${seat.status}`}
      onClick={() => onClick(seat.id)}
    >
      {seat.number}
    </div>
  );
};

export default Seat;