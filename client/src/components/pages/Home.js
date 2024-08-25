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
                    <NavBar candidate={candidate} company={company}/>  
                    <Welcome candidate={candidate} company={company}/>
                    <Row xs={12} md={7} style={{ width: '60%' }}>
                        <Col><Link to="/post-job"><Button className="btn-primary">Post a new job</Button></Link></Col>
                        {/* Needs updating */}
                        <Col onClick={() => navigate(`/jobs/company?company_id=${company.id}`)}><Button className="btn-primary">View your jobs</Button></Col>
                        <Col><Link to="/jobs"><Button className="btn-primary">View all jobs</Button></Link></Col>
                    </Row>
                    
                </>
                :
                <>
                    <NavBar candidate={candidate} company={company}/>
                    <Welcome />
                    <SampleJobs number={3} candidate={candidate} company={company} selection={"all"}/>
                    {/* <Link to="/jobs"><Button>View more jobs</Button></Link> */}
                    <FilterByDep />
                </>
            }

        </>
    )
}