import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, FormControl, Spinner } from "react-bootstrap"
import "./Companies.css"
import groupOfPeople from "../../assets/groupOfPeople.jpg"
import OffcanvasDescription from '../OffcanvasDescription/OffcanvasDescription';
import workoffice from "../../assets/workoffice.gif"
import { RiHomeHeartFill } from "react-icons/ri"
import { BiBookHeart } from "react-icons/bi"
import { BiAlignLeft } from "react-icons/bi"
import { MdWork } from "react-icons/md"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCompaniesAction } from '../../redux/actions/actions';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    searchCompanies: (event, companySearch) => dispatch(fetchCompaniesAction(event,companySearch))
})

class Companies extends Component {

    state={
        companySearch:"",
        companyCount:""
    }

    render() {
       
        return (
            <>
            <style type="text/css">
            {`.navbar {display: none}`}
          </style>
            <Container fluid>
                <Row >
                    <Col style={{borderRight:"1px solid #F3F2EF"}} className="side-panels p-0" md={2}>
                        <Card style={{ width: '100%', border:"none", paddingTop:"40px", backgroundColor:"transparent" }}>
                            <Link style={{color:'black', fontWeight:"bolder"}} to="/" className="navbar-brand text-center">FutureJobs&copy;</Link>
                                    <Card.Body>                                        
                                        <Card.Title className="text-center">Search for Best Companies</Card.Title>
                                            <div className="my-4">
                                                {this.props.companies.isLoading?
                                                <>
                                                <Spinner animation="grow" size="sm" />
                                                <Spinner animation="grow" />
                                                </>
                                                :<Form inline>
                                                    <FormControl
                                                    onKeyDown={(e)=>this.props.searchCompanies(e, this.state.companySearch)}
                                                    id="custom-form"
                                                    value={this.state.companySearch}
                                                    onChange={(e)=>
                                                        this.setState({
                                                            ...this.state,
                                                            companySearch:e.target.value
                                                    })}	
                                                    type="text" 
                                                    placeholder="Search" 
                                                    className=" mr-sm-2" />
                                                </Form>
                                                }
                                            </div>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className="pl-2">
                                    <ul className="p-3 " style={{listStyle:"none"}}>
                                        <Link style={{textDecoration:"none"}} to="/">
                                            <li className="">
                                                <RiHomeHeartFill className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Home</span>   
                                            </li>
                                        </Link>
                                        <Link style={{textDecoration:"none"}} to="/favourites">
                                            <li className="mt-3">
                                                <BiBookHeart className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Favourites {this.props.favourites.companies.length}</span>   
                                            </li>
                                        </Link>
                                        <Link style={{textDecoration:"none"}} to="/categories">
                                            <li className="mt-3">
                                                <BiAlignLeft className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Categories</span>   
                                            </li>
                                        </Link>
                                        <Link style={{textDecoration:"none"}} to="/jobs">
                                            <li className="mt-3">
                                                <MdWork className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Jobs</span>   
                                            </li>
                                        </Link>
                                    </ul>
                                </div>                    
                    </Col>  



                    {!this.props.companies.companiesArray.length? 

                    <Col className="background-img"  md={8} >
                        <div style={{marginTop:"20%", color:"white"}} className="text-center pt-4 pb-3">
                            <h2>Search For Company that best suits you</h2>
                        </div>
                        <p style={{ color:"white", padding:"0 20%"}} className="text-center pt-4 pb-3">We have looked for best companies that meet your requirements, expectations and demands. Chose what you like and make your dreams come true </p>
                    </Col>
                    :<Col  md={8} >
                        <div style={{color:"darkBlue"}} className="text-center pt-4 pb-3">
                            <h2>Search For Company that best suits you</h2>
                        </div>
                        <Row style={{backgroundColor:"#F3F2EF"}}>
                            <OffcanvasDescription jobsList={this.props.companies.companiesArray}/>
                        </Row>
                    </Col> 
                }

                    <Col className="p-0" style={{borderLeft:"1px solid #F3F2EF"}} md={2}>
                        <img src ={groupOfPeople} className="img-fluid d-block w-100 " alt="group of people"/>
                       <div className="my-5 px-2">
                       <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit totam quas animi iusto architecto similique minima quasi in eius repellat, tenetur consectetur unde
                        </p>
                       </div>
                       <img src ={workoffice} className="img-fluid d-block w-100 " alt="group of people"/>
                    </Col>
                </Row>                
            </Container>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);