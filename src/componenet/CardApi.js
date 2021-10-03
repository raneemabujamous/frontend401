import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export class CardApi extends Component {
  render() {
    return (
      <Row xs={1} md={2} className="g-4">
        {this.props.dataApi.map((obj) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={obj.image} />
              <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>{obj.price}</Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                onClick={(e) => {
                  this.props.addtoFav(obj);
                }}
              >
                Add to faveroite
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default CardApi;
