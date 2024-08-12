import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Welcome () {
    return (
        <Container fluid="md" className="mt-2">
            <Row>
                <h2>
                    Small Co's Where You Can Make A World Of Difference
                </h2>
            </Row>
            <Row>
                <p>
                    We're passionate about start-ups and small businesses which is why you'll only find companies with less than 200 employees on our site. This is the place for candidates who love getting their hands dirty and want to experience life in a start-up.
                </p>
            </Row>
            <Row>
                <p>
                    Our site is free to use because we know it's hard being a small business and because we know there is a lot of talent out there who could do a lot of good.
                </p>
            </Row>
            <Row>   
                <p>
                    #wearesupjobs
                </p>
            </Row>
        </Container>
    )
}