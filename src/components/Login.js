import React from 'react'
import Header from './Header'
import {useState ,useRef} from "react";
import {ValidateForm} from "../utils/ValidateForm"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { BG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux'
import { updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
const Login = () => {
  const dispatch=useDispatch();

const[isSignInForm,setisSignInForm]=useState(true);
const[errorMessage,seterrorMessage]=useState({});

const name=useRef(null)
const email=useRef(null)
const password=useRef(null)

  const toggleSignIn =()=>{
    setisSignInForm(!isSignInForm);
  }

  const handelButtonClick=()=>{

    // console.log(email.current.value)
    const nameValue = isSignInForm ? "" : name.current.value;
    
    

    
   const message= ValidateForm(nameValue,email.current.value,password.current.value ,isSignInForm)

   console.log("message",message)

  //  seterrorMessage(message);

   if (message) {
    seterrorMessage(message); // Set validation errors
    return;
} else {
    seterrorMessage({}); // Clear errors
}

  //  sign in sign-up logic

  if(!isSignInForm){
    // sign-up logic
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;


    // updating a user with name
    
updateProfile(auth.currentUser, {
  displayName: name.current.value
}).then(() => {
  // Profile updated!
const {uid,displayName,email} = auth.currentUser;
             dispatch(addUser({uid: uid,email:email,displayName:displayName}))

  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

 

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    const updatedErrorMessage = { ...errorMessage, password: error.message };
    seterrorMessage(updatedErrorMessage);
    // ..
  });

  }else{
    // sign-in logic


    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const updatedErrorMessage = { ...errorMessage, password: error.message };
    seterrorMessage(updatedErrorMessage);
  });
  }
   
  }
  return (
 <>
 <Header isSignInForm={isSignInForm}/> 
 <div className="absolute">
        <img className="h-screen object-cover w-screen" src={BG_URL} alt="logo" />
      </div>

 <form onSubmit={(e)=> e.preventDefault()}  className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
  <h1 className="text-white font-bold text-3xl pb-8">
    {isSignInForm?"Sign In":"Sign Up"}
  </h1>
     
  { 
  !isSignInForm && (
    <>
      <input  ref={name}
        className="mb-6 p-4 border border-white bg-gray-700 text-white w-full" 
        placeholder="Enter your name" 
      /> 
      <br />
      {errorMessage.name &&
    <p  className="text-[red] text-xl pb-8 "> {errorMessage.name}</p>
  }
    </>
  )
}

  <input ref={email} className="mb-6 p-4 border-white bg-gray-700  w-full" placeholder="Email or mobile number "/> <br/>
  {errorMessage.email &&
    <p  className="text-[red] text-xl pb-8 "> {errorMessage.email}</p>
  }


  <input ref={password}  className="mb-6 p-4 w-full bg-gray-700" placeholder="Password" />

  {errorMessage.password &&
    <p  className="text-[red] text-xl pb-8 "> {errorMessage.password}</p>
  }
  

    <button onClick={handelButtonClick} className="bg-red-700 p-4 my-4 w-full rounded-lg">{isSignInForm ?"Sign-In" :"Sign-Up"}</button>

    <p  className="text-[#ffffffb3] text-xl pb-8 ">{ isSignInForm ? <><span className="">New to netflix?</span> <span onClick={toggleSignIn} className="text-white hover:underline "> Sign-up now.</span> </>: <><span className="">Already Registered</span> <span onClick={toggleSignIn} className="text-white hover:underline "> Sign-In now.</span> </>
    
    }</p>
  
 </form>



 </>
  )
}

export default Login
