import Welcome from "../Welcome";
import SampleJobs from "../SampleJobs";
import FilterByDep from "../FilterByDep";
import { Button, Row, Col, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function Home ({ candidate, company }) {


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
                candidate
                    ?
                    <>
                        <Welcome />
                        <SampleJobs number={3} candidate={candidate} company={company} selection={"live"}/>
                        <h4>Search by department</h4>
                        <FilterByDep />
                    </>
                    :
                    <>
                        <Welcome />
                        <Row className="justify-content-center mt-0 mb-5">
                            <Col xs="auto"><Link to="/login"><Button className="btn-primary">Candidate login/ signup</Button></Link></Col>
                            <Col xs="auto"><Link to="/company-login"><Button className="btn-secondary">Company login/ signup</Button></Link></Col>
                        </Row>
                        <SampleJobs number={3} candidate={candidate} company={company} selection={"live"}/>
                        <h4>Search by department</h4>
                        <FilterByDep />
                    </>
            }
            <Footer />
        </>
    )
}