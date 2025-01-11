import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


 

const Body = () => {
    

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },

        {
            path:"/browse",
            element:<Browse/>
        }
    ])


    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
    //           const {uid,displayName,email} = user;
    //          dispatch(addUser({uid: uid,email:email,displayName:displayName}))

    //           // ...
    //         } else {
    //           // User is signed out
    //           // ...
    //           dispatch(removeUser());
    //         }
    //       });
    // },[])
  return (
   <>
  <RouterProvider router={appRouter}/>
   </>
  )
}

export default Body
