import { useState } from "react"
export default function Incriment(){
  
  const [count,setcount]=useState(0)

 function incriment(){
   setcount(count+1)
 }
 function decriment(){
  setcount(count-1)
}
function clear(){
  setcount(0)
}
  return(
    <>
        <div>
          {count}
        </div>
     
       <button onClick={incriment} >incriment</button>
       <button onClick={decriment} >decriment</button>
       <button onClick={clear} >clear</button>
    </>
  )
}