import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

function Booking() {

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [vehicleType, setVehicleType] = useState("Car");

  const options = [
    { value: "car", label: "Car" },
    { value: "bike", label: "Bike" },
    { value: "van", label: "Van" },
    { value: "suv", label: "SUV" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkin: checkInDate, checkout: checkOutDate, type: vehicleType});
    // Add booking logic here
  };

  // const handleChange = (selectedOption) => {
  //   console.log("Selected:", selectedOption);
  // };


  return(
    <section className="booking-wrapper">
      <div className="content-width">
        <form onSubmit={handleSubmit} className="booking-form">
            <h2 className="h2-title form-title">Book Your Vehicle</h2>
          <div className="input-wrapper">

            <div className="field-wrp">
              <label className="checkin-label input-label">Check-in Date</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                className="checkin-field date-select"
                placeholderText="Select check-in date"
                minDate={new Date()}
              />
            </div>

            {/* Check-out */}
            <div className="field-wrp">
              <label className="checkout-label input-label">Check-out Date</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate || new Date()}
                className="checkout-field date-select"
                placeholderText="Select check-out date"
              />
            </div>

            {/* Vehicle Type */}
            <div className="field-wrp">
              <label className="vehicle-type input-label">Vehicle Type</label>

              <Select
                value={vehicleType}
                options={options}
                onChange={setVehicleType}
                placeholder="Choose vehicle..."
                className="text-left"
              />
            </div>

          </div>

          <button type="submit" className="btn submit-btn --draw-border">book now</button>
        </form>
      </div>
  </section>
  )
}

export default Booking