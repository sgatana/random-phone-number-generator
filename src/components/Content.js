import React from 'react'
import { ListGroup, Row, Col, Card } from 'react-bootstrap';

const Content = ({
  generatedNumbers,
  isNumberGenerated,
  maxNumber,
  minNumber,
  totalGeneratedNumbers,
  sortNumbers
}) => {
  return (
    <div>
      {
        !isNumberGenerated
          ? <div>
            <p>No numbers generated yet, please click generate button to generate numbers.</p>
          </div>
          : <div><Row>
            <Col md={7}>
              <h3 className="text-center">Generated Numbers</h3>
              <hr />
            </Col>
          </Row>
            <Row>
              <Col md={7}>

                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <label className="col-md-3">Sort By:</label>
                      <select className="form-control col-md-9" onChange={(e) => sortNumbers(e.target.value)}>
                        <option value='asc' >Ascending</option>
                        <option value='desc'>Descending</option>
                      </select>
                    </Row>
                  </ListGroup.Item>
                  {generatedNumbers.map((generatedNumber, index) => (
                    <ListGroup.Item key={index}>{generatedNumber}</ListGroup.Item>
                  ))}
                </ListGroup>
                <br />
                <h6 className="text-center">Total Generated Numbers {totalGeneratedNumbers}</h6>
                <hr />
                <Row className="text-center">
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Minimun Number</Card.Title>
                        <Card.Text >0{minNumber}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Maximum Number</Card.Title>
                        <Card.Text className="text-center">0{maxNumber}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
      }
    </div>
  )
}
export default Content