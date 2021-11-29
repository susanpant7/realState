import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Houses } from "../helpers/HousesDetails";
import { ImPriceTag } from "react-icons/im";
import HouseDetailsModal from "./HouseDetailsModal";

const ImageAndDescription = () => {
  const [defaultCount, setDefaultCount] = useState(2);
  const [viewId, setviewId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const openModalForId = (id, imgUrl) => {
    setviewId(id);
    setOpenModal(true);
    setSelectedImg(imgUrl)
  };
  const closeModal = () => {
    setOpenModal(false);
    setviewId(0);
    setSelectedImg("")
  };
  return (
    <div>
      <div className="container">
        {Houses.map((item, index) => {
          if (index < defaultCount) {
            return (
              <Card style={{ margin: "2rem" }}>
                <div className="row" key={index}>
                  <div className="col-md-7" style={{ margin: "1rem" }}>
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={item.imageUrl} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          <ImPriceTag /> ${item.price}
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => openModalForId(item.id,item.imageUrl)}
                        >
                          View
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4" style={{ marginTop: "4rem" }}>
                    {item.description} <br />
                  </div>
                </div>
              </Card>
            );
          } else {return ""}
        })}
        <Button
          variant="outline-secondary"
          style={{ margin: "1rem" }}
          disabled={defaultCount >= Houses.length}
          onClick={() => setDefaultCount(defaultCount + 2)}
        >
          Load More
        </Button>{" "}
      </div>
      {openModal && (
        <HouseDetailsModal selectedId={viewId} selectedImg={selectedImg} close={closeModal} />
      )}
    </div>
  );
};

export default ImageAndDescription;
