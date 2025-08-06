// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';


// const Login = () => {

//  const [currentState,setCurrentState] = useState('Login');
//  const {token,setToken,navigate,backendUrl} = useContext(ShopContext);

//  const [name,setName] = useState('');
//  const [password,setPassword] = useState('');
//  const [email,setEmail] = useState('');

//  const onSubmitHandler = async(event)=>{
//  event.preventDefault();
//    try {

//           if(currentState === 'Sign Up'){
                   
//             const response = await axios.post(backendUrl + '/api/user/register',{name,email,password});
//             if (response.data.success) {
//               setToken(response.data.token);
//               localStorage.setItem('token',response.data.token);
//             }
//             else{
//               toast.error(response.data.message)
//             }
//           }else{
//              const response = await axios.post(backendUrl + '/api/user/login',{email,password});
//              if(response.data.success){
//               setToken(response.data.token);
//               localStorage.setItem('token',response.data.token);
//              }else{
//               toast.error(response.data.message)
//              }
//           }  
    
//    } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//    }
//  }

//  useEffect(()=>{
//     if(token){
//       navigate('/');
//     }
//  },[token])

//   return (
//    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//   <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//   <p className='prata-regular text-3xl'>{currentState} </p>
//   <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
//   </div>
//    {currentState === 'Login' ? ' ' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required/>}
//    <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required/>
//    <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required />
   
//    <div className='w-full flex justify-between text-sm mt-[-8px]'>
//   <p className='cursor-pointer'>Forgot your password?</p>
//   {
//     currentState ==='Login'
//     ? <p onClick={()=>setCurrentState('Sign Up ')} className='cursor-pointer'>Create account</p>
//     : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
//   }
//    </div>

//    <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In':'Sign Up'} </button>
   
//     </form>
//   )
// }

// export default Login

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (data.success) {
          setToken(data.token);
          localStorage.setItem('token', data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (data.success) {
          setToken(data.token);
          localStorage.setItem('token', data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1f2a44]">
            {currentState === 'Login' ? 'Sign In' : 'Create Account'}
          </h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {currentState === 'Sign Up' && (
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#766f62]"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#766f62]"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#766f62]"
          />
        </div>

        {/* Forgot / Toggle */}
        <div className="flex justify-between text-sm text-gray-600">
          <button
            type="button"
            className="hover:text-[#1f2a44] transition"
            // TODO: wire up actual reset flow
          >
            Forgot password?
          </button>
          {currentState === 'Login' ? (
            <button
              type="button"
              onClick={() => setCurrentState('Sign Up')}
              className="hover:text-[#1f2a44] transition"
            >
              Create account
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentState('Login')}
              className="hover:text-[#1f2a44] transition"
            >
              Back to Sign In
            </button>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#1f2a44] to-[#766f62] text-white font-medium rounded-full hover:brightness-110 transition"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
