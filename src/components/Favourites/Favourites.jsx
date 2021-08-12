import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import {  withRouter } from 'react-router-dom';
import { removeFromFavouritesAction } from '../../redux/actions/actions';
import OffcanvasDescription from '../OffcanvasDescription/OffcanvasDescription';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: company => dispatch(removeFromFavouritesAction(company))
})

class Favourites extends Component {

    render() {
        return (
           <Container>
               <h3 className="my-3 ml-5">Your Favourites</h3>
                <Row>
                <Col sm={12}>
                <ul style={{ listStyle: "none" }}>
                    {this.props.favourites.companies.length ? 
                     <OffcanvasDescription jobsList={this.props.favourites.companies}/>
                    : <p>No favourites to show</p>}
                </ul>
                </Col>
            </Row>
           </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Favourites));