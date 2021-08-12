import React, { Component } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap"
import "./Home.css"
import MainCarousal from './MainCarousal';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

class Home extends Component {
    state={
        categories:[],
        categorySearch:"",
        categoryJobs:[],
        categoryJobCount:"",
    }

    componentDidMount = () => {
        this.fetchCategories()
    }

    fetchCategories = async (e) => {
        try {
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
        }
    }

    searchCategories = async (e) => {
        console.log(this.state.category);
        try {
            const response = await fetch(`https://remotive.io/api/remote-jobs?category=${this.state.categorySearch}`)
            const data = await response.json()
            this.props.category(data.jobs)
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
    }

    render() {
        return (
            <>
            <Container  className="" >
            <hr/>
            <h1>Careers</h1>
                <MainCarousal/>
                <SectionTwo/>
                <div className="text-center my-5 px-5 py-3">
                    <h3>What we Believe</h3>
                    <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis illo, doloribus velit est dolores pariatur quibusdam neque eveniet! Asperiores qui commodi totam quas temporibus fugit pariatur natus, nulla laudantium.</p>
                </div>
                <SectionThree/>
                <Row className="justify-content-center mt-5 mb-2 home-body pb-5">
                   
                   <Col md={4} className="ml-auto">
                   <h4 className="py-3 text-center">Filter by Category</h4>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control
                            value={this.state.categorySearch}
                            onChange={(e)=> {
                                this.setState({
                                ...this.state,
                                categorySearch:e.target.value
                            })
                            this.searchCategories(e)
                        }}
                             as="select" 
                             defaultValue="Select...">
                                <option>Select...</option>
                                {this.state.categories && this.state.categories.map(category =>  
                                <option value={category.name}>{category.name}</option>
                                )}
                               
                            </Form.Control>
                        </Form.Group>
                   </Col>
                </Row>            
            </Container>
            </>
        );
    }
}

export default Home;