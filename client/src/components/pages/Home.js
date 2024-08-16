import NavBar from "../NavBar"
import Welcome from "../Welcome";
import SampleJobs from "../SampleJobs";
import FilterByDep from "../FilterByDep";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home ({ candidate, company }) {

    return (
        <>   
            {
                company
                ? 
                <>     
                    <NavBar candidate={candidate} company={company}/>  
                    <p>{company.name} is logged in</p>
                    <Welcome />
                    <Row xs={12} md={7} style={{ width: '60%' }}>
                        <Col><Link to="/post-job"><Button className="btn-primary">Post a new job</Button></Link></Col>
                        <Col><Link to="/jobs"><Button className="btn-primary">View {company.name} jobs</Button></Link></Col>
                    </Row>
                    
                </>
                :
                <>
                    <NavBar candidate={candidate} company={company}/>
                    <Welcome />
                    <SampleJobs number={3}/>
                    <Link to="/jobs"><Button>View more jobs</Button></Link>
                    <FilterByDep />
                </>
            }

        </>
    )
}