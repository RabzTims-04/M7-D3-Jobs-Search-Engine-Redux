import React, { Component } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap"
import { withRouter } from 'react-router-dom';
import sectionThree from "../../assets/sectionThree.jpg"
import "./SectionTwo.css"

class SectionThree extends Component {

    componentDidMount = () =>{
        console.log(this.props.history);
    }
    render() {
        return (
            <Row className="mb-5" style={{backgroundColor:"rgb(243, 242, 239)"}}>
                <Col>
                    <Card style={{ width: '100%', border:"none", paddingTop:"70px", backgroundColor:"transparent" }}>
                        <Card.Body>
                            <Card.Title>Find your Dream Job</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div >
                            <Button id="custom-btn" onClick={() => this.props.history.push("/jobs")}  variant="primary">Search Job Title</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0 mr-0">
                    <img src ={sectionThree} className="img-fluid d-block w-100" alt="group of people"/>
                </Col>
            </Row>
        );
    }
}

export default withRouter(SectionThree);