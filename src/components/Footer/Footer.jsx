import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa"
import { GrInstagram, GrLinkedin } from "react-icons/gr"
import { ImYoutube } from "react-icons/im"

class Footer extends Component {
    render() {
        return (
            <Container className="py-3">
                <Row style={{backgroundColor:"#F3F2EF"}} className="text-center p-5">
                    <Col md={3} >
                        <h5>Send us FeedBack</h5>
                        <Form className="pt-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control as="textarea" placeholder="Enter Text" rows={2} />
                            </Form.Group>
                            <Button variant="dark" size="sm" style={{borderRadius:"25px"}} type="button">
                                Submit feedBack
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h5>Follow Us on</h5>                       
                        <div className="pt-3">
                            <Link className="d-inline" style={{textDecoration:"none", color:"black"}}>                                
                                <FaFacebook style={{width:"30px", height:"30px", color:"blue"}} />                           
                            </Link>
                            <Link className="d-inline px-3" style={{textDecoration:"none", color:"black"}}>
                                <GrInstagram style={{width:"30px", height:"30px", color:"purple"}}/>
                            </Link>
                            <Link className="d-inline " style={{textDecoration:"none", color:"black"}}>
                                <ImYoutube style={{width:"35px", height:"35px", color:"red"}}/>
                            </Link>
                            <Link className="d-inline px-3" style={{textDecoration:"none", color:"black"}}>
                                <GrLinkedin style={{width:"30px", height:"30px", color:"#0A66C2"}}/>
                            </Link>
                        </div>                        
                    </Col>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <ul className="pt-3" style={{listStyle:"none"}}>                           
                            <li>
                                futureJobs@careers.com
                            </li> 
                            <li className="py-2">
                                +49 179 5623 8452 01
                            </li>                          
                        </ul>
                    </Col>
                </Row>
                <Row style={{backgroundColor:"#F3F2EF"}} className="text-center px-5">
                    <p>made for school project @FutureJobs&copy;</p>
                </Row>
            </Container>
        );
    }
}

export default Footer;