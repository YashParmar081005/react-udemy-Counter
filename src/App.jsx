import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countToset, setCountToSet] = useState(0)
  //dont do count += 1
  
  // const increamenthandler = ()=>{
  //   //setCount(numval + 1); // short hand notation 
  //   setCount((prevCount) => prevCount + 1); // functional notation
  // }

  return (
    <>
      <h1>Counter is {count}</h1>
      <div className='card'>count is {count}</div>
      <div>

      {/* <button onclick={()=>incrementhandler(8)} style={{margin: "0 5px" }}> increment</button> */}
      <button onClick={() => setCount(count + 1)} style={{margin: "0 5px" }}> increment</button>
      <button onClick={() => setCount((count)=>Math.max(count-1 , 0))} style={{margin: "0 5px" }}>decrement</button>
      <button onClick={() => setCount(0)} style={{margin: "0 5px" }}>reset</button>
      </div>

      <div style={{margin: "20px 0" }} >
        <input 
        style={{
          margin: "0 5px", 
          width: "120px",
          textAlign: "center",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "5px"
        }}
        value={countToset}
        onChange={(e)=>setCountToSet(Number(e.target.value))}
        type="text" />

        <button onClick={()=>
        {setCount(Number(countToset))
          setCountToSet(0)
        }
        } 
        style={{margin: "0 5px" }}>
          Set to {countToset}
        </button>
      </div>
    </>
  )
}

export default App