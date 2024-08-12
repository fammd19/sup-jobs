import CandidateNavBar from "../CandidateNavBar"
import Welcome from "../Welcome";
import LatestJobs from "../LatestJobs";
import FilterByDep from "../FilterByDep";

export default function Home () {
    return (
        <>
            <CandidateNavBar />
            <Welcome />
            <LatestJobs />
            <FilterByDep />
        </>
    )
}