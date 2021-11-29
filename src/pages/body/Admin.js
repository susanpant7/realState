import React, { useState } from "react";
import { Form } from "react-bootstrap";
import api from "../../helpers/Axios";

const Admin = () => {
  const [addedAreas, setAddedAreas] = useState([]);
  const [enteredArea, setEnteredArea] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [addedLocations, setAddedLocations] = useState([{}]);
  const [enteredLocation, setEnteredLocation] = useState("");

  const handleAddNewArea = (e) => {
    if (enteredArea) {
      if (addedAreas.length === 0) {
        setSelectedArea(enteredArea);
      }
      setAddedAreas([...addedAreas, enteredArea]);
      setEnteredArea("");
    }
  };

  const handleAddNewLocation = (e) => {
    if (enteredLocation) {
      setAddedLocations([
        ...addedLocations,
        { area: selectedArea, location: enteredLocation },
      ]);
      setEnteredLocation("");
    }
  };

  const onSubmitHandler = () => {
    api
      .post("api/locations", addedLocations)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ float: "left" }}>
      <h4 style={{ float: "left" }}>Add area : </h4>
      <input
        type="text"
        name="area"
        value={enteredArea}
        onChange={(e) => setEnteredArea(e.target.value)}
      />
      <input
        type="button"
        value="Add New Area"
        disabled={!enteredArea}
        onClick={(e) => handleAddNewArea(e)}
      />

      <br />
      {addedAreas.length > 0 && (
        <>
          <h4 style={{ float: "left" }}>Add Location :</h4>
          <br />
          Add location for area :
          <Form.Select
            selected={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {addedAreas.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </Form.Select>
          <br />
          <h4 style={{ float: "left" }}>Add location : </h4>
          <input
            type="text"
            name="location"
            value={enteredLocation}
            onChange={(e) => setEnteredLocation(e.target.value)}
          />
          <input
            type="button"
            value="Add New Location"
            disabled={!enteredLocation}
            onClick={(e) => handleAddNewLocation(e)}
          />
          <br />
          <input type="button" onClick={onSubmitHandler} value="Submit" />
        </>
      )}
    </div>
  );
};

export default Admin;
