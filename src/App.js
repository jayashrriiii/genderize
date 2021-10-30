
import React, { useState, useEffect } from 'react'
import Gender from "./components/Gender";



function App() 
{
      const [result, setResult] = useState(
                                             {
                                                "name": " ",
                                                "gender": " ",
                                             }
                                          )

      const [text, setText] = useState('');

      const fetchQuote = async () => {
         return await fetch(`https://api.genderize.io?name=${text}`)
                          .then(response => response.json());
      }

      const generate = async () => {
            setResult(await fetchQuote());
      }

      useEffect(async() => {

            setResult(await fetchQuote());
            
      }, [])

      
      return (
                  <div className="App">

                        <p className="head">genderize.io</p>
                        <h2>Determine the gender of a name</h2>

                        <div className="panel">
                              
                              <input type="text" placeholder="Enter name" value={text} onChange={e => setText(e.target.value)} />

                              <button onClick={generate}>Show result</button>
                              
                              <Gender quote={result} />
                        </div>
                              <svg className="curve-1" viewBox="0 0 1440 350">
                              <path fill="#c5deec34" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                              </svg>
                              <svg className="curve-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b9d9eb54" fill-opacity="1" d="M0,224L24,234.7C48,245,96,267,144,229.3C192,192,240,96,288,90.7C336,85,384,171,432,202.7C480,235,528,213,576,218.7C624,224,672,256,720,256C768,256,816,224,864,208C912,192,960,192,1008,208C1056,224,1104,256,1152,229.3C1200,203,1248,117,1296,101.3C1344,85,1392,139,1416,165.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>

                  </div>
             );
}





export default App;
