import React from "react";
import { Link } from "react-router-dom";

function Choose (){
    return (
        <div className="page py-14 mt-5 md:mt-0">
        <div className="py-10 shadow-lg w-96 border-t-8 border-red-500 rounded-lg md:ml-32 mx-auto bg-white">
             <div>
                 <h1 className="font-medium text-3xl mb-5 px-8"> Choose Registration </h1>                    
             </div>
             <div>
                 <div className="my-10">
                    <Link to="" className="w-80 flex justify-center mx-auto py-2 bg-red-500 text-white font-semibold text-lg rounded-xl"> Register as User</Link>
                 </div>
                 <div className="flex justify-start w-full opacity-80">
                    <hr className="bg-gray-600 border-1 border-gray-400 w-40  mt-3" />
                    <p className="mx-5 font-sm text-sm text-gray-600"> Or </p>
                    <hr className="bg-gray-600 border-1 border-gray-400 w-44  mt-3" />
                 </div>
                 <div className="mt-10">
                 <Link to="" className="w-80 flex justify-center mx-auto py-2 bg-red-500 text-white font-semibold text-lg rounded-xl"> Register as Hoster</Link>
                 </div>
             </div>
        </div>
     </div>
    )
}

export default Choose