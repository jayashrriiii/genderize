
import React, { useState, useEffect } from 'react'
import Quote from "./components/Image";



function App() 
{
      const [image, setImage] = useState({
        message: null,
            
      })

      const fetchQuote = async () => {
         return await fetch('https://dog.ceo/api/breeds/image/random')
                          .then(response => response.json());
      }

      const generate = async () => {
            setImage(await fetchQuote());
      }

      useEffect(async() => {

            setImage(await fetchQuote());
            
      }, [])

      
      return (
                  <div className="App">
                    
                        <button onClick={generate}>Get new image</button>

                        <Quote quote={image} />

                        <div className="img-back">

                        </div>

                  </div>
             );
}





export default App;
