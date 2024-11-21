import React from "react"

function Card({userName,titleText="visit me"}){ //here set the default value for titleText so if someone else forget to add the titleText in the code 
console.log(userName);


    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
          <img
            src="https://images.pexels.com/photos/29205077/pexels-photo-29205077/free-photo-of-athletic-man-running-on-rooftop-in-austin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {titleText}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{userName}</h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
          </p>
        </div>
    )
}

export default Card