import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { addToFavouritesAction } from '../../redux/actions/actions';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFavouritesAction(company))
})

class JobsList extends Component {
    render() {
        return (
            <ul classname="text-center">
                {this.props.jobs?.slice(0,10).map(job => 
                <>
                <Button color="primary" onClick={() => this.props.addToFavourites(job)}> *</Button>
                    <Link onClick={() => this.props.history.push(`/details/${job.id}`) } >
                        <li key={job.id}>{job.company_name}</li>
                    </Link>
                </>
                )}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobsList));