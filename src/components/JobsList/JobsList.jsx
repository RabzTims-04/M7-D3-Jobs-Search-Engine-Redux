import React, { Component } from 'react';
import { Button, Row, Jumbotron, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { addToFavouritesAction } from '../../redux/actions/actions';
import { FcLike } from "react-icons/fc"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFavouritesAction(company))
})

class JobsList extends Component {
    render() {
        return (            
                this.props.jobs?.slice(0,10).map(job => 
                        <Jumbotron className="p-1 my-1" >
                            <Container fluid key={job.id}>
                               <Row>
                                    {/* <Button className="mr-5 ml-2" variant="outline-light" onClick={() => this.props.addToFavourites(job)}> 
                                    </Button> */}
                                        <FcLike className="mr-5 ml-2 mt-3" onClick={() =>this.props.addToFavourites(job)} /> 
                                    <Link to={`/details/${job.id}`}>
                                            <h3>{job.company_name}</h3>
                                            <p>{job.title}</p>
                                    </Link>
                               </Row>
                            </Container>
                        </Jumbotron>
                )           
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobsList));