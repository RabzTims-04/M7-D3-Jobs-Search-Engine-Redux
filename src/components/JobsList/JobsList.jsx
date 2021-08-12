import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { addJobDetails, addToFavouritesAction,removeFromFavouritesAction } from '../../redux/actions/actions';
import { FcLike } from "react-icons/fc"
import { AiOutlineHeart } from "react-icons/ai"
import "./JobsList.css"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFavouritesAction(company)),
    addedJobDetails:(job) => dispatch(addJobDetails(job)),
    removeFromFavourites: company => dispatch(removeFromFavouritesAction(company))
})

class JobsList extends Component {
    componentDidMount = () => {
        console.log("joblist jobs", this.props.jobsList);
    }
    render() {
        return (            
                this.props.jobsList.slice(0,10).map((job, i) => 
                        <div onClick={() => this.props.addedJobDetails(job)} style={{backgroundColor:"white", cursor:"pointer"}} className="m-2 joblist-cards" >
                            <Container fluid key={job.id}>
                               <Row>
                                   {this.props.favourites.companies.includes(job)?
                                    <Col md={1}>
                                        <FcLike className="mr-5 ml-2 mt-4" onClick={() => this.props.removeFromFavourites(job)} />
                                    </Col>
                                    :<Col md={1}>
                                        <AiOutlineHeart className="mr-5 ml-2 mt-4" onClick={() =>this.props.addToFavourites(job)} />
                                    </Col>
                                    }
                                    <Col md={5} className="pt-2">
                                        <span>{job.title}</span>
                                        <p className="text-muted">{job.company_name}</p>                                   
                                    </Col> 
                                    <Col md={4} className="pt-2">
                                        <span>{job.candidate_required_location}</span>
                                        <p className="text-muted">location</p> 
                                    </Col>  
                                    <Col md={2} className="pt-2">
                                        <span>{job.job_type}</span>
                                        <p className="text-muted">job-type</p> 
                                    </Col>                                  
                                    
                               </Row>
                            </Container>
                        </div>
                )           
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobsList));