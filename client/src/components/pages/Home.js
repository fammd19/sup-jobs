import NavBar from "../NavBar"
import Welcome from "../Welcome";
import SampleJobs from "../SampleJobs";
import FilterByDep from "../FilterByDep";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home ({candidate}) {

    return (
        <>
            <NavBar candidate={candidate}/>
            <Welcome />
            <SampleJobs number={3}/>
            <Link to="/jobs"><Button>All Jobs</Button></Link>
            <FilterByDep />
        </>
    )
}