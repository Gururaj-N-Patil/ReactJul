import React, {useEffect, useState} from "react"; 

export default function Counter() { 
    const[c , setCount] = useState(0); 
    useEffect(()=>{
        setTimeout(()=>{
            setCount((c)=> c + 1)
        },1000);
    });
  return (
    <div>
      <h1>The Count is {c}</h1>
      <button onClick={() => {setCount(c + 1)}}>Click me</button>
    </div>
  )
}
