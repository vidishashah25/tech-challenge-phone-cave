import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function PhoneList() {

    const [phones, setPhones] = useState(null);

   useEffect(()=>{
    axios.get("http://localhost:5005/api/phones/")
        .then((res)=>{
            console.log(res.data)
            setPhones(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
   },[])

  return (
    <div className="m-3 flex justify-items-center flex-col items-center">
    <h1 className="text-3xl font-bold dark:text-white mb-3">Phone catalogue</h1>
    <div className="m-3 flex justify-items-center flex-row items-center gap-7">
    
    {
        phones && 
        (phones.map((phone)=>{
            return(
        <div className="relative  flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-96 bg-slate-100">
        <div className="relative h-56 w-fit mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            className = "h-fit w-fit"
            src={phone.picURL}
            alt="card-image"
          />
        </div>
        <div className="p-6">
        <div className="flex flex-row justify-between">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {phone.modelName}
            </h5>
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {phone.price} €
            </h5>
        </div>
          
          <h5 className="block mb-2 font-sans text-m antialiased font-semibold leading-snug tracking-normal text-gray-500">
            {phone.brandName}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {phone.desc.slice(0,80)}
          </p>
        </div>
        <div className="p-6 pt-0">
        <Link to={`/phones/${phone._id}`}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Read More
          </button>
        </Link>
        </div>
      </div>
            )
        }))
        
       
    }
      
    </div>
    </div>
  );
}

export default PhoneList
