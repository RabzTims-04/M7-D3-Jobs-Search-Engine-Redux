import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Badge } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom';
import { FcLike } from "react-icons/fc"
import { connect } from 'react-redux';

const mapStateToProps = (state) => state

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Link to="/" className="navbar-brand">FutureJobs&copy;</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link" to="/companies">Companies</Link>
                    <Link className="nav-link" to="/jobs">Jobs</Link>
                    <Link className="nav-link" to="/categories">Categories</Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Link className="nav-link" eventKey={2} to="/favourites">
                        <Button variant="outline-light">
                            <FcLike/>
                            <Badge bg="light" text="dark">{this.props.favourites.companies.length}</Badge>
                        </Button>                        
                    </Link>
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        );
    }
}

export default connect(mapStateToProps)(withRouter(NavBar));