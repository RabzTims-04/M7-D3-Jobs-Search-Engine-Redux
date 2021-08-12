import React from 'react'
import { useState } from "react"
import { Button, Offcanvas, Col } from "react-bootstrap"
import { connect } from 'react-redux';
import Details from '../components/Details/Details';
import JobsList from '../components/JobsList/JobsList';
import { addToFavouritesAction,removeFromFavouritesAction } from '../redux/actions/actions';
import { FcLike } from "react-icons/fc"
import { AiOutlineHeart } from "react-icons/ai"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFavouritesAction(company)),
    removeFromFavourites: company => dispatch(removeFromFavouritesAction(company))
})

function OffcanvasDescription({jobsList, jobDetails,addToFavourites, favourites, removeFromFavourites}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("jobs",jobsList);
  
    return (
      <>
      <div onClick={handleShow}>
        <JobsList jobsList={jobsList}  />
      </div>

        <Offcanvas show={show} onHide={handleClose} scroll="true" backdrop="true" placement="end">
          <Offcanvas.Header closeButton>
                {favourites.companies.includes(jobDetails.details)?
                        <Col md={1}>
                            <FcLike className="mr-5 ml-2 mt-4" onClick={() => {removeFromFavourites(jobDetails.details)}} />
                        </Col>
                        :<Col md={1}>
                            <AiOutlineHeart className="mr-5 ml-2 mt-4" onClick={() =>addToFavourites(jobDetails.details)} />
                        </Col>
                }
          </Offcanvas.Header>
          <Offcanvas.Body >
              <Details job={jobDetails.details} />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default connect(mapStateToProps,mapDispatchToProps)(OffcanvasDescription)