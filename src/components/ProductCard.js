import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ id, image, title }) {
  return (
    <Card style={{ width: "18rem" }} className="card-shadow m-4 p-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`/${id}`}>
          <Button variant="primary">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
