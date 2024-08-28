import NavBar from "../NavBar"
import Welcome from "../Welcome";
import SampleJobs from "../SampleJobs";
import FilterByDep from "../FilterByDep";
import { Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Home ({ candidate, company }) {

    const navigate = useNavigate();

    return (
        <>   
            {
                company
                ? 
                <>     
                    <Welcome company={company}/>
                    <Row className="justify-content-center">
                        <Col xs="auto"><Link to="/post-job"><Button className="btn-primary">Post a new job</Button></Link></Col>
                        <Col  xs="auto"><Link to={`/jobs/company/${company.id}`}><Button variant="primary">View your jobs</Button></Link></Col>
                        <Col xs="auto"><Link to="/jobs"><Button className="btn-primary">View all jobs</Button></Link></Col>
                    </Row>
                    
                </>
                :
                <>
                    <Welcome />
                    <SampleJobs number={3} candidate={candidate} company={company} selection={"all"}/>
                    <FilterByDep />
                </>
            }

        </>
    )
}