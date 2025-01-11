export const ValidateForm =(name,email ,password ,isSignInForm)=>{
    const errors = {};
   

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)



    if(!isSignInForm){
        const iSName= /^[A-Za-z\s]+$/.test(name)

          if(!iSName){
            errors.name = "Name is not valid. It should contain only letters and spaces.";
  }
    }
   


  if(!isEmailValid){
    errors.email = "Email ID is not valid";
  }

  if(!isPasswordValid){
    errors.password = "Password is not valid";
  }

  return Object.keys(errors).length > 0 ? errors : null;



}