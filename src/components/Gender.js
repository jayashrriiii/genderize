


import React from 'react'



function Gender({ quote }) 
{
     var res = quote.gender;
     if( res === "female")
     {
          return (
                    <div>
                         <div className="img-c"></div>
                         <p className="ress">I am {quote.gender}.</p>
                    </div>
                 )
     }
     else if( res === "male")
     {
          return (
               <div>
                    <div className="img-cc"></div>
                    <p className="ress" style={{marginTop: "20px"}}>I am {quote.gender}.</p>
               </div>
            )
     }
     else
     {
          return <h2 className="back">Get Result Here</h2>
     }
}





export default Gender
