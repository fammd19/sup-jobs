import NavBar from "../NavBar"
import Welcome from "../Welcome";
import SampleJobs from "../SampleJobs";
import LightButton from "../LightButton";
import FilterByDep from "../FilterByDep";

export default function Home ({candidate}) {
    return (
        <>
            <NavBar candidate={candidate}/>
            <Welcome />
            <SampleJobs />
            <LightButton />
            <FilterByDep />
        </>
    )
}