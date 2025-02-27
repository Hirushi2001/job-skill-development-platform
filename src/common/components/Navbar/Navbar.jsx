import React from 'react'
import logo from '../../../assets/logo1.png'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';



function Navbar() {

const {openSignIn}=useClerk()
const {user} = useUser()


  return (
    <div className='shadow py-3 mx-5 my-4.5'>
        <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
            <img className='w-[100px] h-[50px]' src={logo} alt="Logo" />
              {
                user
                ?
                <div className='flex items-center  gap-3'>
                <Link to="/applications" className="text-blue-900">Applied Jobs</Link>  
                  <p>|</p>
                  <p className='max-sm:hidden'>Hi,{user.firstName+" "+user.lastName}</p>
                  <UserButton/>
                </div>
                : <div className='flex gap-4  max-sm:text-xs'>
                <button className='text-gray-600'>Job seekers login</button>
                <button onClick={e=>openSignIn()} className="bg-blue-900 text-white px-6 sm:px-9 py-3 sm:py-4 rounded-full">Login</button>
  
              </div>
              }

           
        </div>
    </div>
  )
}

export default Navbar
