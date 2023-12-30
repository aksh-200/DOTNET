
import { useState } from "react"





export default function Dotnet()
{
    let [arr,setarr]=useState([]);
     
 
   function rows()
   {
    return arr.map((element =>{
      return(<><h3>{element.title}</h3><h5>  {element.description}</h5></> )
     
    }))
   }
 
 
 
 
    async function handler(){

        try
        {
             const response =  await  fetch("http://localhost:5114/Products"
               
              
            )
        if(!response.ok)
        {
           throw new Error("Error")
        }
        const result = await response.json();
        await  setarr(result);
        console.log(arr);
       
     }
     catch(err)
     {
      console.log(err)
     }
    
     
    }



   
      

    return(
      <>
        <button onClick={handler}>Get DATA</button>
       <p>{rows()}</p>
        
</>
    
    )
}



