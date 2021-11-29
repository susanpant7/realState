import { Card, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import { HomePageImages } from "../../helpers/ImageFiles";

const Home = () => {
  // const [houses, setHouses] = useState({});
  // useEffect(() => {
  //   setHouses(houses);
  //   api.get("api/houses/1").then((response) => {
  //     console.log("the response is ==> ", response);
  //   });
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Card className="text-center">
        <Card.Header className="">
          <h2>Something is waiting for you</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>You are only a call away from these houses</Card.Title>
          <Card.Text>
            <ImageGallery items={HomePageImages} />
            Want to collaborate with us? If you are in need of beautiful houses,
            you can reach us at any time. We are here for your services. Also
            check the services we offer by clicking the button below.
          </Card.Text>
          <Button variant="primary" as={Link} to="/services">
            Search More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
