import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PhoneDetails() {

const {phoneId} = useParams();

const [phoneDetails, setPhoneDetails] = useState(null);

const getPhoneDetails = () => {
    axios.get(`http://localhost:5005/api/phones/${phoneId}`)
        .then((res)=>{
            setPhoneDetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
}

useEffect(()=>{
    getPhoneDetails()
},[])

  return (
 <>
    {phoneDetails &&     
    <section class="py-20 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 z-50 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 ">
                  <img
                    class="object-cover w-full lg:h-1/2"
                    src={phoneDetails.picURL}
                    alt=""
                  />
                </div>
  
                <div class="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                  <div class="flex items-center justify-center mt-6">
                    <span class="mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                      </svg>
                    </span>
                    <div>
                      <h2 class="text-sm font-bold text-gray-700 lg:text-lg dark:text-gray-400">
                        Have question about buying an {phoneDetails.brandName}
                      </h2>
                      <a
                        class="text-xs text-blue-400 lg:text-sm dark:text-blue-200"
                        href="#"
                      >
                        Chat with an {phoneDetails.brandName} specialist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <span class="text-red-500 dark:text-red-200">New</span>
                  <h2 class="max-w-xl mt-2 mb-4 text-3xl font-bold md:text-3xl font-heading dark:text-gray-300">
                    Buy {phoneDetails.modelName}
                  </h2>
                  <h2 class="mt-2 mb-4 text-xl font-bold  font-heading dark:text-gray-300">
                  {phoneDetails.price} €
                  </h2>
                </div>
  
                <div class="gap-2 pb-4 mt-2 mb-4 border-b-2 border-gray-300  dark:border-gray-600">
                  <p class="mb-2 text-lg font-semibold dark:text-gray-400">
                    Description
                  </p>
                  <p class=" text-gray-500 dark:text-gray-400">
                  {phoneDetails.desc}
                  </p>
                </div>
  
  
                <div class="gap-2 pb-4 mt-2 mb-4 border-b-2 border-gray-300  dark:border-gray-600">
                  <p class="mb-1 text-lg font-semibold dark:text-gray-400">
                    Available Color
                  </p>
                  <p class=" text-gray-500 dark:text-gray-400">
                  {phoneDetails.color}
                  </p>
                  <p class="mb-1 text-lg font-semibold dark:text-gray-400">
                    OS
                  </p>
                  <p class=" text-gray-500 dark:text-gray-400">
                  {phoneDetails.OS}
                  </p>
                </div>
  
                <div class="mt-6">
                  <p class="mb-2 text-lg font-semibold dark:text-gray-400">
                    Storage Capacity
                  </p>
  
                  <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <div class="mb-2 text-m font-semibold dark:text-gray-400">
                          {phoneDetails.storage} 
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
  
                <div class="mt-6">
                  <p class="mb-4 text-lg font-semibold dark:text-gray-400">
                    Choose a payment option
                  </p>
                  <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                    <div>
                      <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                            Pay in full
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                            Pay monthly
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 ">
                  <div class="flex flex-wrap items-center">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      </svg>
                    </span>
                    <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                      Delivery
                    </h2>
                  </div>
                  <div class="px-7">
                    <p class="mb-2 text-sm dark:text-gray-400">In Stock</p>
                    <p class="mb-2 text-sm dark:text-gray-400">Free Shipping</p>
                    <a
                      class="mb-2 text-sm text-blue-400 dark:text-blue-200"
                      href="#"
                    >
                      Get delivery dates
                    </a>
                  </div>
                </div>
  
                <div class="mt-6 ">
                  <div class="flex flex-wrap items-center">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-bag"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
                      </svg>
                    </span>
                    <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                      Pickup
                    </h2>
                  </div>
                  <div class="px-7">
                    <a
                      class="mb-2 text-sm text-blue-400 dark:text-blue-200"
                      href="#"
                    >
                      Check availability
                    </a>
                  </div>
                </div>
                <div class="mt-6 ">
                <Link to="/">
                  <button class="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">
                    Back to catlog
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
 </>
 
  );

}

export default PhoneDetails;
