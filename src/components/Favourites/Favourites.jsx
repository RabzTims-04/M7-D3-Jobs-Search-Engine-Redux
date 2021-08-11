import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import { withRouter } from 'react-router-dom';
import { removeFromFavouritesAction } from '../../redux/actions/actions';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: index => dispatch(removeFromFavouritesAction(index))
})

class Favourites extends Component {

    render() {
        return (
            <Row>
                <Col sm={12}>
                <ul style={{ listStyle: "none" }}>
                    {this.props.favourites.companies.map((company, i) => (
                    <li key={i} className="my-4 d-flex">
                        <Button variant="danger" className="mr-3" onClick={() => this.props.removeFromFavourites(i)}>
                        <FaTrash />
                        </Button>
                        <p onClick={() => this.props.history.push(`/details/${company.id}`)} >{company.company_name}</p>
                    </li>
                    ))}
                </ul>
                </Col>
            </Row>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Favourites));