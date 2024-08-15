import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function CoLogout ( { company, setCompany } ) {

    useEffect (()=> {
        fetch('/api/company/logout', {
            method: "DELETE"
            })
            .then(response => setCompany(null))
        }, 
        [setCompany])

    if (!company) {
        return (
            <Navigate to="/"/>
        )}

    return null

}

