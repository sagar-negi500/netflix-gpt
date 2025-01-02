import React from 'react'
import Header from './Header'
import {useState} from "react";
const Login = () => {

const[isSignInForm,setisSignInForm]=useState(true);

  const toggleSignIn =()=>{
    setisSignInForm(!isSignInForm);
  }
  return (
 <>
 <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg')] bg-cover bg-center h-screen w-full bg-black ">
 <Header/>
 

 <form className="bg-black w-[29%] m-auto p-20 bg-opacity-[0.8]">
  <h1 className="text-white font-bold text-3xl pb-8">
    {isSignInForm?"Sign In":"Sign Up"}
  </h1>
     
  { 
  !isSignInForm && (
    <>
      <input 
        className="mb-6 p-4 border border-white bg-gray-700 text-white w-full" 
        placeholder="Email or mobile number" 
      /> 
      <br />
    </>
  )
}

  <input className="mb-6 p-4 border-white bg-gray-700  w-full" placeholder="Email or mobile number "/> <br/>



  <input className="mb-6 p-4 w-full bg-gray-700" placeholder="Password" />

    <button className="bg-red-700 p-4 my-4 w-full rounded-lg">{isSignInForm ?"Sign-In" :"Sign-Up"}</button>

    <p  className="text-[#ffffffb3] text-xl pb-8 ">{ isSignInForm ? <><span className="">New to netflix?</span> <span onClick={toggleSignIn} className="text-white hover:underline "> Sign-up now.</span> </>: <><span className="">Already Registered</span> <span onClick={toggleSignIn} className="text-white hover:underline "> Sign-In now.</span> </>
    
    }</p>
  
 </form>
 </div>
 </>
  )
}

export default Login
