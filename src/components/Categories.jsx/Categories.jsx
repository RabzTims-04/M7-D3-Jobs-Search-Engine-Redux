import React, { Component } from 'react';
import { Container, Row, Col, Card, Form } from "react-bootstrap"
import OffcanvasDescription from '../../OffcanvasDescription/OffcanvasDescription';
import { RiHomeHeartFill } from "react-icons/ri"
import { BiBookHeart } from "react-icons/bi"
import { GrWorkshop } from "react-icons/gr"
import { MdWork } from "react-icons/md"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Categories.css"
import { fetchCategoriesAction, fetchCategoryJobsAction } from '../../redux/actions/actions';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategoriesAction()),
    searchCategories: (categorySearch) => dispatch(fetchCategoryJobsAction(categorySearch))
})

class Categories extends Component {

    state={
       /*  categories:[], */
        categorySearch:"",
/*         categoryJobs:[], */
        categoryJobCount:"",
    }

    componentDidMount = () => {
        this.props.fetchCategories()
    }

    fetchCategories = async (e) => {
        /* try {
            const response = await fetch(`https://remotive.io/api/remote-jobs/categories`) 
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                this.setState({
                    ...this.state,
                    categories: data.jobs,
                })
            }
        } catch (error) {
            console.log(error);
        } */
    }

    /*searchCategories = async (e) => {
        console.log(this.state.category);
         try {
            const response = await fetch(`https://remotive.io/api/remote-jobs?category=${this.state.categorySearch}`)
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                this.setState({
                    ...this.state,
                    categoryJobs: data.jobs,
                    categoryJobCount: data["job-count"]
                })
            }

        }catch (error){
            console.log(error);
        } 
    }*/
    render() {
        return (
            <>
            <style type="text/css">
            {`.navbar {display: none}`}
          </style>
            <Container fluid>
                <Row >
                    <Col style={{borderRight:"1px solid #F3F2EF"}} className="side-panels-categories p-0" md={3}>
                        <Card style={{ width: '100%', border:"none", paddingTop:"40px", backgroundColor:"transparent" }}>
                            <Link style={{color:'black', fontWeight:"bolder"}} to="/" className="navbar-brand text-center">FutureJobs&copy;</Link>
                                    <Card.Body>                                        
                                        <Card.Title className="text-center mb-5">Search for Best Companies</Card.Title>
                                            <div className="my-4">
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Control
                                                    id="custom-form-categories"
                                                    value={this.state.categorySearch}
                                                    onChange={(e)=> {
                                                        this.setState({
                                                        ...this.state,
                                                        categorySearch:e.target.value
                                                    })
                                                    this.props.searchCategories(this.state.categorySearch)
                                                }}
                                                    as="select" 
                                                    defaultValue="Select...">
                                                        <option>Select...</option>
                                                        {this.props.categories.categoriesArray.map(category =>  
                                                        <option value={category.name}>{category.name}</option>
                                                        )}
                                                    
                                                    </Form.Control>
                                                </Form.Group>
                                            </div>
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
                                        <Link style={{textDecoration:"none"}} to="/companies">
                                            <li className="mt-3">
                                                <GrWorkshop className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Companies</span>   
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

                    {!this.props.categoryJobs.categoryJobsArray.length? 

                    <Col className="background-img-categories"  md={9} >
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
                            <OffcanvasDescription jobsList={this.props.categoryJobs.categoryJobsArray}/>
                        </Row>
                    </Col> 
                }
                </Row>                
            </Container>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);