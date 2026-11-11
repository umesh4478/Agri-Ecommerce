import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from './pages/Home'

function Auth(){

  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login"

    const [user, setuser]= useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:""
    }) 

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setuser((prev)=>(
      {...prev, [name]:value}
    ))
    console.log(user);
    
  }
  const handleSubmit=async(e)=>{
   e.preventDefault();

   if(!isLogin){
    if(!user.name || !user.email || !user.password || !user.confirmpassword){
      alert('all feilds required')
      return;
    }
    if(user.password !=user.confirmpassword){
      alert('password do not match');
      return;
    }
    try{
     let response= await fetch('http://localhost:5000/api/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password
      })
     })
     const data= await response.json();
     console.log(data);
     if(response.ok){
      alert(data.message)
     }else{
      alert(data.message)
     }
     
    }catch(error){
      console.log("error");
      alert("Something went wrong");
    }
   }
   if(isLogin){
    if(!user.email || !user.password){
      alert('enter all credentials')
      return;
    }
   
   
    try{
    let response = await fetch('http://localhost:5000/api/auth/login',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        email:user.email,
        password:user.password
      })
    }
    
  )
  const data  = await response.json();
  console.log(data);

  if(response.ok){
    navigate('/Home')
  }else{
    alert(data.message)
  }
  
}

    catch(error){
       console.log(error);
    }
   }
  
  }
  

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-5xl font-bold mb-4">
            {isLogin ? "Welcome Back!" : "Hello Friend!"}
          </h1>

          <p className="text-center text-white/80 max-w-sm">
            {isLogin
              ? "Login to continue your journey and access your dashboard."
              : "Create your account and start building amazing things."}
          </p>

          <button
            onClick={() => navigate(isLogin ? "/signup" : "/login")}
            className="mt-10 border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 duration-300"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">

            <h2 className="text-4xl font-bold text-center text-slate-800">
              {isLogin ? "Login" : "Sign Up"}
            </h2>

            {!isLogin && (
              <input
                type="text"
                value={user.name}
                name="name"
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-500"

              />
            )}

            <input
              type="email"
              value={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
            onChange={handleChange}
            name="password"
            value={user.password}
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {!isLogin && (
              <input
                type="password"
                name="confirmpassword"
                value={user.confirmpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}

            {isLogin && (
              <div className="flex justify-end text-sm">
                <button
                  type="button"
                  className="text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold duration-300"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

            <div className="relative">
              <hr />
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-400 text-sm">
                OR
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="border p-3 rounded-xl hover:bg-slate-100 duration-300"
              >
                Google
              </button>

              <button
                type="button"
                className="border p-3 rounded-xl hover:bg-slate-100 duration-300"
              >
                GitHub
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;