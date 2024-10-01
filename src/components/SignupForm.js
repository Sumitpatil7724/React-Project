import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""

    })

    const[showPassword,setShowPassword]=useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }
  return (
    <div>
        {/* student instructor tab */}
        <div>
            <button className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Student
            </button>
            <button className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Instructor
            </button>
        </div>
        
        <form onSubmit={submitHandler}>
            {/* first name and last name */}
            <div className='flex gap-x-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    First Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-black border-b-richblack-100/30 h-10'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-black border-b-richblack-100/30 h-10'
                    />
                </label>
            </div>

            <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-2'>
                    Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email Address"
                        value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-black border-b-richblack-100/30 h-10'
                    />
            </label>

            <div className='w-full flex gap-x-4 mx-0 mt-2'>
                <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text"):("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-black border-b-richblack-100/30 h-10'
                        />
                         <span 
                           className='absolute right-3 top-[38px] cursor-pointer'
                           onClick={()=>setShowPassword((prev)=>!prev)}>
                          {showPassword ?
                           (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :

                           (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>
                </label>

                <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text"):("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-black border-b-richblack-100/30 h-10'
                        />
                         <span className='absolute right-3 top-[38px] cursor-pointer'
                          onClick={()=>setShowPassword((prev)=>!prev)}>
                          {showPassword ? 

                          (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                          (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>
                </label>
            </div>

            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 '>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm