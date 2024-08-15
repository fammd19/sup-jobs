import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Logout ( { candidate, setCandidate } ) {

    useEffect (()=> {
        fetch('/api/candidate/logout', {
            method: "DELETE"
            })
            .then(response => setCandidate(null))
        }, 
        [setCandidate])

    if (!candidate) {
        return (
            <Navigate to='/login'/>
        )}

    return null

}

