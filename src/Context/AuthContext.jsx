import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [users,setUsers]=useState(JSON.parse(localStorage.getItem('users'))|| [])
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem('currentUser')) || null)

    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(users))
    },[users])

    useEffect(()=>{
        localStorage.setItem('currentUser',JSON.stringify(currentUser))
    },[currentUser])

    useEffect(()=>{
        let existingusers=JSON.parse(localStorage.getItem('users'))
        let adminexists=existingusers.find(u=>u.role==='admin')
        if(!adminexists){
            let admin={email:"admin@gmail.com",password:"admin",role:"admin"}
            existingusers.push(admin)
            localStorage.setItem('users',JSON.stringify(existingusers))
        }
    },[])

 

    const RegisterUser=(email,password)=>{
        const exists=users.find((u)=>u.email===email)
        if (exists){
            alert("user already exists")
            return false;
        }
        let Newuser={email,password,role:'customer'}
        setUsers([...users,Newuser])
        return true

    }
    const LoginUser=(email,password)=>{
        const found=users.find((u)=>u.email===email && u.password===password)
        if (found){
            setCurrentUser(found)
            alert("Login Successfully")
            return true
        }
        else{
            alert("No user has been Found")
            return false
        }
    }

    const LogoutUser=()=>{
        setCurrentUser(null)
        localStorage.removeItem("currentUser");
        alert("Logged out Successfully")
    }



    return(
        <AuthContext.Provider value={{users,setUsers,currentUser,RegisterUser,LoginUser,LogoutUser}}>

            {children}
        </AuthContext.Provider>
    )
}