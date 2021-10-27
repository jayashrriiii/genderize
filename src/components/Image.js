


import React from 'react'



function Image({ quote }) 
{
    return (
               
                       <div className="img-div">
                    
                            <img className="dog" src={ quote.message } />
               
                       </div>

           )
}





export default Image
