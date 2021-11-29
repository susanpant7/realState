// import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ImageAndDescription from "../../components/ImageAndDescription";
// import api from "../../helpers/Axios";

const Services = () => {
  // const [areaLocations, setAreaLocations] = useState([]);
  // const [selectedValue, setSelectedValue] = useState("");
  // useEffect(() => {
  //   api.get("api/locations").then((response) => {
  // var temp = [{ area1: ["l1", "l2"] }, { area2: ["l1", "l2"] }];
  // for (var i = 0; i < response.data.length; i++) {

  // }
  //     var initialSelected = `${response.data[0].Area} - ${response.data[0].Location}`
  //     setSelectedValue(initialSelected)
  //     setAreaLocations(response.data);
  //   });
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const handleSelectChange = (e) => {
  //   setSelectedValue(e.target.value)
  // }
  return (
    <div>
      <h3>Just some clicks away from finding your desired house !!</h3>
      <>
        <Card className="text-center">
          <Card.Header>Search Houses</Card.Header>
          {/* <div style={{ width: "30%" }}>
            <div>
              <h4 style={{ margin: "10px" }}>Filter Your Choices</h4>
            </div>
            <br />
            <div className="">
              <Form.Select size="lg" value={selectedValue} onChange={(e)=>handleSelectChange(e)}>
                {areaLocations.map((item, index) => {
                  return <option>{item.Area} - {item.Location}</option>;
                })}
              </Form.Select>
            </div>
          </div>
          The selected filter is {selectedValue} */}
          <ImageAndDescription />
        </Card>
      </>
    </div>
  );
};

export default Services;
