import React, { Component } from 'react';
import { Row, Col, Card, Button, Container} from "react-bootstrap"
import { withRouter } from 'react-router-dom';
import workWoman from "../../assets/work.jpg"
import "./SectionFour.css"

class SectionFour extends Component {

    componentDidMount = () =>{
        console.log(this.props.history);
    }

    render() {
        return (
           <Container className="px-5 mb-5 pt-4">
                <Row  style={{backgroundColor:"black"}} className="px-5 pt-4 pb-5">
                <Col>
                    <img src ={workWoman} className="img-fluid d-block section-four-img mt-3" alt="group of people"/>
                </Col>

                <Col >
                    <Card style={{ width: '100%', border:"none", paddingTop:"60px", backgroundColor:"transparent", color:"white" }}>
                        <Card.Body>
                            <Card.Title className="mb-5" style={{fontWeight:"bolder"}}>Can't Find the role you are looking for?</Card.Title>
                            <div >
                            <Button id="custom-btn-section-four" onClick={() => this.props.history.push("/categories")}  variant="light">Check out our Categories Sections &rarr;</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           </Container>
        );
    }
}

export default withRouter(SectionFour);