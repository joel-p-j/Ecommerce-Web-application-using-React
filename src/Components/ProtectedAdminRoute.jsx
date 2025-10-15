import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

const ProtectedAdminRoute = ({children}) => {
    const {currentUser}=useContext(AuthContext)
    if (!currentUser){
      return <Navigate to={'/login'}/>
    }
    if (currentUser.role!=='admin'){
      return <Navigate to={'/'}/>
    }
  return children
}

export default ProtectedAdminRoute
