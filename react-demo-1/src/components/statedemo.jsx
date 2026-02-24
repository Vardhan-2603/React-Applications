import { useState } from "react";
function statedemo(){
    // let counter=10
    // state
    let {counter,setCounter}=useState(10)
    let {marks,setMarks}=useState([1,2])
    let {user,setUser}=useState({name:"vardhan",age:21})
    //Incriment counter
    const Incriment=()=>{
        // If it is not depend on the previous value
        setCounter(counter+1);
        // else if it depends on the previous value
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
    }
    return(
        <div>
           
            
        </div>
    )

}

export default statedemo;