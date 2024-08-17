import { Form, Button } from "react-bootstrap"

export default function UpdateForm ( candidateDetails, setCandidateDetails) {

    return (
        <div id="account-upate-form" className="hide">
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={candidateDetails.first_name} onChange={(e)=>setCandidateDetails({...candidateDetails, first_name: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={candidateDetails.last_name} onChange={(e)=>setCandidateDetails({...candidateDetails, last_name: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={candidateDetails.email} onChange={(e)=>setCandidateDetails({...candidateDetails, email: e.target.value})} />
            </Form.Group>
            {/* <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={candidateDetails.password} onChange={(e)=>setCandidateDetails({...candidateDetails, password: e.target.value})}/>
            </Form.Group>  */}
            <Button type="submit">Login</Button>  
        </Form>
        </div>
    )
}

