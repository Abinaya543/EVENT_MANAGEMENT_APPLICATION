import React, { useState } from 'react';
import TheatreSeatLayout from './TheatreSeatLayout';


import './style.css';
import { ReactReduxContext } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const SeatSelectionApp = () => {

  
  const seatData = [
    [
      { id: 'A1', status: 'available', price: 180 },
      { id: 'A2', status: 'available', price: 180 },
      { id: 'A3', status: 'available', price: 180 },
      { id: 'A4', status: 'available', price: 180 },
    ],
    
    [
      { id: 'B1', status: 'available', price: 180 },
      { id: 'B2', status: 'available', price: 180 },
      { id: 'B3', status: 'available', price: 180 },
      { id: 'B4', status: 'available', price: 180 },
    ],
    [
      { id: 'C1', status: 'available', price: 180 },
      { id: 'C2', status: 'available', price: 180 },
      { id: 'C3', status: 'available', price: 180 },
      { id: 'C4', status: 'available', price: 180 },

    ],
    [
      { id: 'D1', status: 'available', price: 180 },
      { id: 'D2', status: 'available', price: 180 },
      { id: 'D3', status: 'available', price: 180 },
      { id: 'D4', status: 'available', price: 180 },
    ],
  ];
  const seatData1 = [
    
    [
      { id: 'A5', status: 'available', price: 180 },
      { id: 'A6', status: 'available', price: 180 },
      { id: 'A7', status: 'available', price: 180 },
      { id: 'A8', status: 'available', price: 180 },
      { id: 'A9', status: 'available', price: 180 },
      { id: 'A10', status: 'available', price: 180 },
      { id: 'A11', status: 'available', price: 180 },
      { id: 'A12', status: 'available', price: 180 },
    ],
    
    [
      { id: 'B5', status: 'available', price: 180 },
      { id: 'B6', status: 'available', price: 180 },
      { id: 'B7', status: 'available', price: 180 },
      { id: 'B8', status: 'available', price: 180 },
      { id: 'B9', status: 'available', price: 180 },
      { id: 'B10', status: 'available', price: 180 },
      { id: 'B11', status: 'available', price: 180 },
      { id: 'B12', status: 'available', price: 180 },
    ],
    [
      { id: 'C5', status: 'available', price: 180 },
      { id: 'C6', status: 'available', price: 180 },
      { id: 'C7', status: 'available', price: 180 },
      { id: 'C8', status: 'available', price: 180 },
      { id: 'C9', status: 'available', price: 180 },
      { id: 'C10', status: 'available', price: 180 },
      { id: 'C11', status: 'available', price: 180 },
      { id: 'C12', status: 'available', price: 180 },
    ],
    [
      { id: 'D5', status: 'available', price: 180 },
      { id: 'D6', status: 'available', price: 180 },
      { id: 'D7', status: 'available', price: 180 },
      { id: 'D8', status: 'available', price: 180 },
      { id: 'D9', status: 'available', price: 180 },
      { id: 'D10', status: 'available', price: 180 },
      { id: 'D11', status: 'available', price: 180 },
      { id: 'D12', status: 'available', price: 180 },
    ],
  ];
  const seatData2 = [
    [
      { id: 'A13', status: 'available', price: 180 },
      { id: 'A14', status: 'available', price: 180 },
      { id: 'A15', status: 'available', price: 180 },
      { id: 'A16', status: 'available', price: 180 },
    ],
    
    [
      { id: 'B13', status: 'available', price: 180 },
      { id: 'B14', status: 'available', price: 180 },
      { id: 'B15', status: 'available', price: 180 },
      { id: 'B16', status: 'available', price: 180 },
    ],
    [
      { id: 'C13', status: 'available', price: 180 },
      { id: 'C14', status: 'available', price: 180 },
      { id: 'C15', status: 'available', price: 180 },
      { id: 'C16', status: 'available', price: 180 },
    ],
    [
      { id: 'D13', status: 'available', price: 180 },
      { id: 'D14', status: 'available', price: 180 },
      { id: 'D15', status: 'available', price: 180 },
      { id: 'D16', status: 'available', price: 180 },
    ],
  ];
  const seatData3 = [
    [
      { id: 'E1', status: 'available', price: 150 },
      { id: 'E2', status: 'available', price: 150 },
      { id: 'E3', status: 'available', price: 150 },
      { id: 'E4', status: 'available', price: 150 },
    ],
    [
      { id: 'F1', status: 'available', price: 150 },
      { id: 'F2', status: 'available', price: 150 },
      { id: 'F3', status: 'available', price: 150 },
      { id: 'F4', status: 'available', price: 150 },
    ],
    [
      { id: 'G1', status: 'available', price: 150 },
      { id: 'G2', status: 'available', price: 150 },
      { id: 'G3', status: 'available', price: 150 },
      { id: 'G4', status: 'available', price: 150 },
    ],
    [
      { id: 'H1', status: 'available', price: 150 },
      { id: 'H2', status: 'available', price: 150 },
      { id: 'H3', status: 'available', price: 150 },
      { id: 'H4', status: 'available', price: 150 },
    ],
    [
      { id: 'I1', status: 'available', price: 150 },
      { id: 'I2', status: 'available', price: 150 },
      { id: 'I3', status: 'available', price: 150 },
      { id: 'I4', status: 'available', price: 150 },
    ],
    [
      { id: 'J1', status: 'available', price: 150 },
      { id: 'J2', status: 'available', price: 150 },
      { id: 'J3', status: 'available', price: 150 },
      { id: 'J4', status: 'available', price: 150 },
    ],
  ];
  const seatData4 = [
    [
      { id: 'E5', status: 'available', price: 150 },
      { id: 'E6', status: 'available', price: 150 },
      { id: 'E7', status: 'available', price: 150 },
      { id: 'E8', status: 'available', price: 150 },
      { id: 'E9', status: 'available', price: 150 },
      { id: 'E10', status: 'available', price: 150 },
      { id: 'E11', status: 'available', price: 150 },
      { id: 'E12', status: 'available', price: 150 },
    ],
    [
      { id: 'F5', status: 'available', price: 150 },
      { id: 'F6', status: 'available', price: 150 },
      { id: 'F7', status: 'available', price: 150 },
      { id: 'F8', status: 'available', price: 150 },
      { id: 'F9', status: 'available', price: 150 },
      { id: 'F10', status: 'available', price: 150 },
      { id: 'F11', status: 'available', price: 150 },
      { id: 'F12', status: 'available', price: 150 },
    ],
    [
      { id: 'G5', status: 'available', price: 150 },
      { id: 'G6', status: 'available', price: 150 },
      { id: 'G7', status: 'available', price: 150 },
      { id: 'G8', status: 'available', price: 150 },
      { id: 'G9', status: 'available', price: 150 },
      { id: 'G10', status: 'available', price: 150 },
      { id: 'G11', status: 'available', price: 150 },
      { id: 'G12', status: 'available', price: 150 },
    ],
    [
      { id: 'H5', status: 'available', price: 150 },
      { id: 'H6', status: 'available', price: 150 },
      { id: 'H7', status: 'available', price: 150 },
      { id: 'H8', status: 'available', price: 150 },
      { id: 'H9', status: 'available', price: 150 },
      { id: 'H10', status: 'available', price: 150 },
      { id: 'H11', status: 'available', price: 150 },
      { id: 'H12', status: 'available', price: 150 },
    ],
    [
      { id: 'I5', status: 'available', price: 150 },
      { id: 'I6', status: 'available', price: 150 },
      { id: 'I7', status: 'available', price: 150 },
      { id: 'I8', status: 'available', price: 150 },
      { id: 'I9', status: 'available', price: 150 },
      { id: 'I10', status: 'available', price: 150 },
      { id: 'I11', status: 'available', price: 150 },
      { id: 'I12', status: 'available', price: 150 },
    ],
    [
      { id: 'J5', status: 'available', price: 150 },
      { id: 'J6', status: 'available', price: 150 },
      { id: 'J7', status: 'available', price: 150 },
      { id: 'J8', status: 'available', price: 150 },
      { id: 'J9', status: 'available', price: 150 },
      { id: 'J10', status: 'available', price: 150 },
      { id: 'J11', status: 'available', price: 150 },
      { id: 'J12', status: 'available', price: 150 },
    ],
  ];
  const seatData5 = [
    [
      { id: 'E13', status: 'available', price: 150 },
      { id: 'E14', status: 'available', price: 150 },
      { id: 'E15', status: 'available', price: 150 },
      { id: 'E16', status: 'available', price: 150 },
    ],
    [
      { id: 'F13', status: 'available', price: 150 },
      { id: 'F14', status: 'available', price: 150 },
      { id: 'F15', status: 'available', price: 150 },
      { id: 'F16', status: 'available', price: 150 },
    ],
    [
      { id: 'G13', status: 'available', price: 150 },
      { id: 'G14', status: 'available', price: 150 },
      { id: 'G15', status: 'available', price: 150 },
      { id: 'G16', status: 'available', price: 150 },
    ],
    [
      { id: 'H13', status: 'available', price: 150 },
      { id: 'H14', status: 'available', price: 150 },
      { id: 'H15', status: 'available', price: 150 },
      { id: 'H16', status: 'available', price: 150 },
    ],
    [
      { id: 'I13', status: 'available', price: 150 },
      { id: 'I14', status: 'available', price: 150 },
      { id: 'I15', status: 'available', price: 150 },
      { id: 'I16', status: 'available', price: 150 },
    ],
    [
      { id: 'J13', status: 'available', price: 150 },
      { id: 'J14', status: 'available', price: 150 },
      { id: 'J15', status: 'available', price: 150 },
      { id: 'J16', status: 'available', price: 150 },
    ],
  ];
  const seatData6 = [
    [
      { id: 'K1', status: 'available', price: 100 },
      { id: 'K2', status: 'available', price: 100 },
      { id: 'K3', status: 'available', price: 100 },
      { id: 'K4', status: 'available', price: 100 },
    ],
    
    [
      { id: 'L1', status: 'available', price: 100 },
      { id: 'L2', status: 'available', price: 100 },
      { id: 'L3', status: 'available', price: 100 },
      { id: 'L4', status: 'available', price: 100 },
    ],
    [
      { id: 'M1', status: 'available', price: 100 },
      { id: 'M2', status: 'available', price: 100 },
      { id: 'M3', status: 'available', price: 100 },
      { id: 'M4', status: 'available', price: 100 },
    ],
    [
      { id: 'N1', status: 'available', price: 100 },
      { id: 'N2', status: 'available', price: 100 },
      { id: 'N3', status: 'available', price: 100 },
      { id: 'N4', status: 'available', price: 100 },
    ],
  ];
  const seatData7 = [
    [
      { id: 'K5', status: 'available', price: 100 },
      { id: 'K6', status: 'available', price: 100 },
      { id: 'K7', status: 'available', price: 100 },
      { id: 'K8', status: 'available', price: 100 },
      { id: 'K9', status: 'available', price: 100 },
      { id: 'K10', status: 'available', price: 100 },
      { id: 'K11', status: 'available', price: 100 },
      { id: 'K12', status: 'available', price: 100 },
    ],
    
    [
      { id: 'L5', status: 'available', price: 100 },
      { id: 'L6', status: 'available', price: 100 },
      { id: 'L7', status: 'available', price: 100 },
      { id: 'L8', status: 'available', price: 100 },
      { id: 'L9', status: 'available', price: 100 },
      { id: 'L10', status: 'available', price: 100 },
      { id: 'L11', status: 'available', price: 100 },
      { id: 'L12', status: 'available', price: 100 },
    ],
    [
      { id: 'M5', status: 'available', price: 100 },
      { id: 'M6', status: 'available', price: 100 },
      { id: 'M7', status: 'available', price: 100 },
      { id: 'M8', status: 'available', price: 100 },
      { id: 'M9', status: 'available', price: 100 },
      { id: 'M10', status: 'available', price: 100 },
      { id: 'M11', status: 'available', price: 100 },
      { id: 'M12', status: 'available', price: 100 },
    ],
    [
      { id: 'N5', status: 'available', price: 100 },
      { id: 'N6', status: 'available', price: 100 },
      { id: 'N7', status: 'available', price: 100 },
      { id: 'N8', status: 'available', price: 100 },
      { id: 'N9', status: 'available', price: 100 },
      { id: 'N10', status: 'available', price: 100 },
      { id: 'N11', status: 'available', price: 100 },
      { id: 'N12', status: 'available', price: 100 },
    ],
 
  ];
  const seatData8 = [
    
    [
      { id: 'K13', status: 'available', price: 100 },
      { id: 'K14', status: 'available', price: 100 },
      { id: 'K15', status: 'available', price: 100 },
      { id: 'K16', status: 'available', price: 100 },
    ],
    
    [
      { id: 'L13', status: 'available', price: 100 },
      { id: 'L14', status: 'available', price: 100 },
      { id: 'L15', status: 'available', price: 100 },
      { id: 'L16', status: 'available', price: 100 },
    ],
    [
      { id: 'M13', status: 'available', price: 100 },
      { id: 'M14', status: 'available', price: 100 },
      { id: 'M15', status: 'available', price: 100 },
      { id: 'M16', status: 'available', price: 100 },
    ],
    [
      { id: 'N13', status: 'available', price: 100 },
      { id: 'N14', status: 'available', price: 100 },
      { id: 'N15', status: 'available', price: 100 },
      { id: 'N16', status: 'available', price: 100 },
    ],
  ];

  // const navigate = useNavigate();

  const [seats, setSeats] = useState(seatData);
  const [seats1, setSeats1] = useState(seatData1);
  const [seats2, setSeats2] = useState(seatData2);
  const [seats3, setSeats3] = useState(seatData3);
  const [seats4, setSeats4] = useState(seatData4);
  const [seats5, setSeats5] = useState(seatData5);
  const [seats6, setSeats6] = useState(seatData6);
  const [seats7, setSeats7] = useState(seatData7);
  const [seats8, setSeats8] = useState(seatData8);

  const [setamount] = useState('totalAmount');

  const handleSubmit = (e)=>{
    e.preventDefault();
   let totalprice = totalAmount()
 
    if(totalprice === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_0YI6y1BKg3OqGN",
        key_secret:"vpFaaS1e27tYekNst9dLIe63",
        amount: totalprice *100,
        currency:"INR",
        name:"D-06 Appliance",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"DEEPAK",
          email:"deepakprabu1234@gmail.com",
          contact:"8754988838"
        },
        notes:{
          address:"Sri krishna college of Enginnering and Technology"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
   
  }

  const handleSeatClick = (seatId, setSeatsFunc) => {
    setSeatsFunc((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) =>
          seat.id === seatId ? { ...seat, status: toggleSeatStatus(seat.status) } : seat
        )
      )
    );
  };

  const toggleSeatStatus = (currentStatus) => {
    return currentStatus === 'selected' ? 'available' : 'selected';
  };

  const totalAmount = () => {
    const allSeats = [...seats, ...seats1, ...seats2, ...seats3, ...seats4, ...seats5, ...seats6, ...seats7, ...seats8];
    const selectedSeats = allSeats.flatMap((row) => row.filter((seat) => seat.status === 'selected'));

    return  selectedSeats.reduce((total, seat) => total + seat.price,0);

  };
  
  

  return (
    <div className="seat-selection-app">
      
      <h1>Seat Selection</h1>
      <h4>Seat Rs.180</h4>
      <div className="srow1">
        <div className='scol1'>
          <TheatreSeatLayout seatData={seats} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats)} />
        </div>
        <div className='scol2'>
          <TheatreSeatLayout seatData={seats1} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats1)} />
        </div>
        <div className='scol3'>
          <TheatreSeatLayout seatData={seats2} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats2)} />
        </div>
      </div>
      <h4>Seat Rs.150</h4>
      <div className="srow2">
        <div className='scol1'>
          <TheatreSeatLayout seatData={seats3} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats3)} />
        </div>
        <div className='scol2'>
          <TheatreSeatLayout seatData={seats4} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats4)} />
        </div>
        <div className='scol3'>
          <TheatreSeatLayout seatData={seats5} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats5)} />
        </div>
      </div>
      <h4>Seat Rs.100</h4>
      <div className="srow3">
        <div className='scol1'>
          <TheatreSeatLayout seatData={seats6} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats6)} />
        </div>
        <div className='scol2'>
          <TheatreSeatLayout seatData={seats7} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats7)} />
        </div>
        <div className='scol3'>
          <TheatreSeatLayout seatData={seats8} onSeatClick={(seatId) => handleSeatClick(seatId, setSeats8)} />
        </div>
      </div>
      
      <button className="screb">Eye's Here</button>
      <p value={totalAmount()}onChange={(e)=>setamount(e.target.value)}>Total Amount: RS.{totalAmount()}</p>
   
      <center><button className='bookb' onClick={handleSubmit} >Book Tickets!</button></center>
    </div>
  );
};

export default SeatSelectionApp;