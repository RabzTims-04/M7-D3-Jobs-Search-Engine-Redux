import React, { Component } from 'react';
import { Container } from "react-bootstrap"
import Footer from '../Footer/Footer';
import "./Home.css"
import MainCarousal from './MainCarousal';
import SectionFour from './SectionFour';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

class Home extends Component {

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
                <hr/>
                    <div className="text-center my-5 px-5 py-3">
                        <h3>Why FutureJobs&copy;</h3>
                        <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis illo, doloribus velit est dolores pariatur quibusdam neque eveniet! Asperiores qui commodi totam quas temporibus fugit pariatur natus, nulla laudantium.</p>
                    </div>
                <hr/>
                <SectionFour/>  
                <hr/>         
            </Container>           
            <Footer/>
            </>
        );
    }
}

export default Home;