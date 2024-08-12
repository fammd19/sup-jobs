import CandidateNavBar from "../CandidateNavBar"
import Welcome from "../Welcome";
import SampleJobs from "../SampleJobs";
import LightButton from "../LightButton";
import FilterByDep from "../FilterByDep";

export default function Home () {
    return (
        <>
            <CandidateNavBar />
            <Welcome />
            <SampleJobs />
            <LightButton />
            <FilterByDep />
        </>
    )
}