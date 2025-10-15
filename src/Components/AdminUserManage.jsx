// import React, { useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext, useState } from 'react'


const AdminUserManage = () => {
    // const [customers,setCustomers]=useState(JSON.parse(localStorage.getItem('users'))||[])
    const {users,setUsers}=useContext(AuthContext)
    const [editingEmail,setEditingEmail]=useState(null)
    const [editData,setEditData]=useState({email:"",role:""})
    const [isAddingUser,setIsAddinguser]=useState(false)
    const [newUser,SetNewUser]=useState({email:'',role:''})
    const[searchUser,setSearchUser]=useState('')

    const handleDelete=(email)=>{
      let filteredUsers=users.filter((user)=>(user.email!==email))
      setUsers(filteredUsers)
      localStorage.setItem('users',JSON.stringify(filteredUsers))
    }
    
    const handleEdit=(user)=>{
        setEditingEmail(user.email)
        setEditData({email:user.email,role:user.role})

    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setEditData({...editData,[name]:value})
    }
    const handleSave=()=>{
      const updatedArray=users.map((user)=>(
        editingEmail===user.email ? 
        editData:user
      ))
      setUsers(updatedArray)
      localStorage.setItem('users',JSON.stringify(updatedArray))
      setEditingEmail(null)
      setEditData({email:'',role:''})
    }
    const handleCancel=()=>{
      setEditingEmail(null)
      setEditData({email:'',role:''})
    }
    const HandleAddUser=(e)=>{
      const {name,value}=e.target
      SetNewUser({...newUser,[name]:value})
    }
    const HandleSubmit=(e)=>{

      const exists=users.some((u)=>u.email===newUser.email)
      if (exists){
        alert("email already exists")
        return
      }
      e.preventDefault()
      let updatedArray=[...users,newUser]
      setUsers(updatedArray)
      localStorage.setItem('users',JSON.stringify(updatedArray))
      SetNewUser({email:"",role:""})
      setIsAddinguser(false)

    }
    const handleSearch=(e)=>{
      setSearchUser(e.target.value)
     
    }
     const filteredUsers=users.filter((user)=>user.email.toLowerCase().includes(searchUser) || user.role.toLowerCase().includes(searchUser))
      

  
  return (
    <div className='p-6 shadow-md flex flex-col gap-5'>
      <h2 className='text-center text-2xl font-bold text-gray-800'>Registered Users</h2>
      <header className='mb-5 flex flex-col justify-end gap-5'>
        <div className='flex justify-end gap-5'>
             <button onClick={()=> {setIsAddinguser(!isAddingUser); SetNewUser({email:'',role:''})}} className='bg-gray-600 px-4 py-2 rounded text-white '>{isAddingUser? "Cancel":"Add User"}</button>
            <input name='search' value={searchUser} onChange={handleSearch} className='border border-gray-300 rounded-md px-3 py-2 w-60'  type="search" placeholder='Search for a customer' />
        </div>
       
        <div className='flex justify-center w-full'>
          {isAddingUser &&(
            <form className='flex flex-col w-[70%] bg-purple-200 shadow rounded p-5 gap-5' onSubmit={HandleSubmit} action="">
               <input className='bg-white rounded p-3 ' name='email' value={newUser.email} onChange={HandleAddUser} type="text" placeholder='Enter Email' />
              <input className='bg-white rounded p-3' name='role' value={newUser.role} onChange={HandleAddUser} type="text"  placeholder='Enter Role'/>
              <button type='submit' className=' bg-green-600 w-50 self-center p-1 font-semibold rounded'>Add</button>
            </form>)
           
          }
        </div>

      </header>
      <table className='bg-white min-w-full border border-gray-200 rounded-lg' >
        <thead>
          <tr  className='text-left bg-gray-800 text-white' >
            <th className='p-3 border-b'>Email</th>
            <th className='p-3 border-b'>Role</th>
            <th className='p-3 border-b'>Action</th>
          </tr>
          
        </thead>
        <tbody>
          {
            filteredUsers && filteredUsers.length>0?
                            (filteredUsers.map((user,index)=>(
                              <tr key={index}>
                                <td className='p-3 border-b'>{
                                  (editingEmail===user.email)?
                                  <input placeholder='Enter new Email' name='email' value={editData.email} onChange={handleChange} type='email '/>
                                  :
                                  user.email}</td>
                                <td className='p-3 border-b'>{
                                  (editingEmail===user.email)?
                                  <select  name='role' value={editData.role} onChange={handleChange}  className="border  rounded" >
                                  <option value="customer">customer</option>
                                  <option value="admin">admin</option>
                                  </select>
                                  :
                                  user.role}</td>
                                <td className='p-3 border-b flex gap-5'>{
                                  editingEmail===user.email?

                                  (<>
                                  <button className='bg-green-600 px-2 py-1 rounded font-semibold' onClick={handleSave}>Save</button> 
                                  <button className='bg-red-600 px-2 py-1 rounded font-semibold' onClick={handleCancel}>Cancel</button>
                                  </>
                                )
                                  :(
                                  <>
                                  <button onClick={()=>handleEdit(user)} className='bg-green-600 px-2 py-1 rounded font-semibold'>Edit</button> 
                                  <button onClick={()=>handleDelete(user.email)} className='bg-red-600 px-2 py-1 rounded font-semibold' >Remove</button>
                                  </>
                                  )
                                  }
                                </td>
                              </tr>
                            ))):
                            <tr>
                              <td className='col-span-2 text-center p-3 text-gray-500'>No Registered users</td>
                            </tr>
          }
        </tbody>
      
        
      </table>

    </div>
  )
}

export default AdminUserManage

