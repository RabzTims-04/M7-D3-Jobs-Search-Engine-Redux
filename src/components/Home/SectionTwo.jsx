import React, { Component } from 'react';
import { Row, Col, Card, Button} from "react-bootstrap"
import { withRouter } from 'react-router-dom';
import groupOfPeople from "../../assets/groupOfPeople.jpg"
import "./SectionTwo.css"

class SectionTwo extends Component {
    
    componentDidMount = () =>{
        console.log(this.props.history);
    }
    render() {
        return (
            <Row>
                <Col>
                    <img src ={groupOfPeople} className="img-fluid d-block w-100" alt="group of people"/>
                </Col>

                <Col >
                    <Card style={{ width: '100%', border:"none", paddingTop:"60px" }}>
                        <Card.Body>
                            <Card.Title>Search for Best Companies</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div >
                            <Button id="custom-btn" onClick={() => this.props.history.push("/companies")}  variant="primary">Search For Companies</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default withRouter(SectionTwo);