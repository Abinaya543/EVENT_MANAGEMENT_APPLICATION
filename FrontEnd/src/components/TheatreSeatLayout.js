// TheatreSeatLayout.js
import React from 'react';


const TheatreSeatLayout = ({ seatData, onSeatClick }) => {
  return (
    <div className="theatre-seat-layout">
      {seatData.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${seat.status}`}
              onClick={() => onSeatClick(seat.id)}
            >
              {seat.id} {/* Displaying the seat name */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TheatreSeatLayout;