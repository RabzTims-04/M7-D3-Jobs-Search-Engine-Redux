import React from 'react'
import { ListGroup, Container, Button } from 'react-bootstrap';
import striptags from 'striptags';

function Details({job}) {
   
        return (
          <Container>
              <div className="px-3">
                <h4 className="mb-4" > {job.title} </h4>
                <Button className="mb-3" >Apply Now</Button>
              </div>
                <ListGroup variant="flush">
                <ListGroup.Item><strong>Company name: </strong>{job.company_name}</ListGroup.Item>
                <ListGroup.Item ><strong>Visit Profile: </strong><a target="blank" href={job.url}>{job.url}</a></ListGroup.Item>
                <ListGroup.Item><strong>Category: </strong>{job.category}</ListGroup.Item>
                <ListGroup.Item><strong>Job Type: </strong>{job.job_type}</ListGroup.Item>
                <ListGroup.Item><strong>Publication date: </strong>{job.publication_date}</ListGroup.Item>
                <ListGroup.Item><strong>Required Location: </strong>{job.candidate_required_location}</ListGroup.Item>
                <ListGroup.Item><strong>Salary: </strong>{job.salary}</ListGroup.Item>
                <ListGroup.Item><strong>Description: </strong>{striptags(job.description)}</ListGroup.Item>
            </ListGroup>
          </Container>
        );
}

export default Details;