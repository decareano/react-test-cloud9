import React, { useState } from "react";
import LogoutButton from './logout-button'; 
import MainApp from './main-app';

export default function BloodOxygen(props) {
  const [oxygen, setOxygen] = useState("");
  const handleFormChange = (event) => {
    event.preventDefault();
    // john first changed it to [] and later to {}. Confirmed it does not work with an array
    const data = { oxygen };
    props.handleSubmit(data);
    //event.handleChange(event)
  };

  const handleOxygen = (event) => {
    setOxygen(event.target.value);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        {/* //john centered header below */}
        <div style={{ margin: "0 auto" }}>
          <h1 class="text-end">Blood Oxygen</h1>
        </div>
      </nav>
      <h1>Add new Readings: </h1>
      <form onSubmit={handleFormChange}>
        <label htmlFor="date">Oxygen</label>
        <input
          type="text"
          name="oxygen"
          id="oxygen"
          //use defaultValue instead of value
          value={oxygen}
          onChange={handleOxygen}
        />
        <LogoutButton />
      </form>
    </>
  );
}
