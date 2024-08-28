import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Logout ( { candidate, setCandidate } ) {

    const navigate = useNavigate();

    useEffect (()=> {
        fetch('/api/candidate/logout', {
            method: "DELETE"
            })
            .then(response => {
                setCandidate(null)
            }
    )}, 
        [])

    if (!candidate) {
        return (
            <Navigate to='/login'/>
        )}

    return null

}

