import React, { useEffect } from "react";

function Test(){
    useEffect(function(){
     console.log("First");
    },[]);
        
    console.log("Second");
        
    useEffect(function(){
     console.log("Third")
    });
        
    return(
        <div>
            
        </div>
    )
}

export default Test;