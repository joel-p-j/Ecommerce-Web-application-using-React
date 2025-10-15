import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
const ProtectedRoute = ({children}) => {
    const {currentUser} = useContext(AuthContext)
    return currentUser ? children : <Navigate to={'/login'} />
  
}

export default ProtectedRoute
