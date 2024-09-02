import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound () {
    return (
        <>
            <Container className="mx-5 my-5">
                <h1>Oops, it looks like you've got lost</h1>
                <h3  className="my-3">Let's get you back on track</h3>
                <div>
                    <Link className="ml-3" to="/"><Button variant="primary">Home</Button></Link>
                </div>
            </Container>
        </>
    )
}

