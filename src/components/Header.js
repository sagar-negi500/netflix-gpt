import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice'
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants';



const Header = ({isSignInForm}) => {
  const dispatch=useDispatch();
const navigate =useNavigate();

const user=useSelector(store=>store.user)
  const handelSignOut =()=>{

signOut(auth).then(() => {

 
  
}).catch((error) => {
  // An error happened.
});
  }



   useEffect(()=>{
          const unsubsubscribe= onAuthStateChanged(auth, (user) => {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,displayName,email} = user;
               dispatch(addUser({uid: uid,email:email,displayName:displayName}))
               navigate("/browse")
                // ...
              } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/")
              }
            });

              // unsubscribe when component unmounts
            return ()=>unsubsubscribe();
      },[])
  return (
    <div className={'absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '}>
     {/* <img className='' src='/images/Netflix_Logo_PMS.png' alt=''/> */}
     <img className={user?'w-44 mx-auto md:mx-0 ':'w-60  '} src={LOGO} alt=''/>

{
 user && 
 <div className='flex items-center mr-4'>
      
 <button onClick={handelSignOut} className='bg-red-600 rounded-xl p-3 ' >Sign-Out</button>


</div>
}

   
    </div>
  )
}

export default Header;
