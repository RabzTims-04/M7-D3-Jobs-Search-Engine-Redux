import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { FcDislike } from "react-icons/fc";
import { Link, withRouter } from 'react-router-dom';
import { removeFromFavouritesAction } from '../../redux/actions/actions';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: index => dispatch(removeFromFavouritesAction(index))
})

class Favourites extends Component {

    render() {
        return (
           <Container>
               <h3 className="my-3 ml-5">Your Favourites</h3>
                <Row>
                <Col sm={12}>
                <ul style={{ listStyle: "none" }}>
                    {this.props.favourites.companies.length ? this.props.favourites.companies.map((company, i) => (
                    <li key={i} className="my-4 d-flex">
                        <Button variant="outline-light" className="mr-3" onClick={() => this.props.removeFromFavourites(i)}>
                        <FcDislike />
                        </Button>
                        <Link className="mt-2" to={`/details/${company.id}`}>{company.company_name}</Link>
                    </li>
                    )): <p>No favourites to show</p>}
                </ul>
                </Col>
            </Row>
           </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Favourites));