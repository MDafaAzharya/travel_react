import React from "react";
import '../../assets/css/register.css'

function Register() {
    return(
        <div className="page py-14 mt-5 md:mt-0">
           <div className="py-10 px-8 shadow-lg w-96 border-t-8 border-red-500 rounded-lg md:ml-32 mx-auto bg-white">
                <div>
                    <h1 className="font-medium text-3xl mb-5"> Register </h1>                    
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-y-3 my-3">
                        <label htmlFor="" className="font-normal text-sm text-gray-400">Username</label>
                        <input type="text" name="" id="" className="p-2 boreder border-2 border-gray-400 rounded-xl hover:border-red-400 duration-200" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-3 my-3">
                        <label htmlFor="" className="font-normal text-sm text-gray-400">Password</label>
                        <input type="text" name="" id="" className="p-2 boreder border-2 border-gray-400 rounded-xl hover:border-red-400 duration-200" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-3 my-3">
                        <label htmlFor="" className="font-normal text-sm text-gray-400">Email</label>
                        <input type="text" name="" id="" className="p-2 boreder border-2 border-gray-400 rounded-xl hover:border-red-400 duration-200" />
                    </div>
                    <div>
                        <button className="px-32 py-3 bg-red-500 text-white font-semibold text-md rounded-full flex mx-auto mt-5 hover:bg-transparent border-2 
                        hover:border-red-500 hover:text-red-500 duration-300">Register</button>
                    </div>
                </div>
           </div>
        </div>       
    )
}

export default Register