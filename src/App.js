import React, { useState } from 'react'
import ChoreChart from "./ChoreChart"

function App ()  {
    const [choreLogs, setChoreLogs] = useState([])
    //const [value, setValue] = useState();
    const [choreDesc, setChoreDesc] = useState();

    const addChoreLog = (log) => {
      let logs = [...choreLogs, log]
        setChoreLogs(logs)
        console.log(log)
    }
    
    const handleSubmit = (event) => {
      addChoreLog([choreDesc])
      event.preventDefault()
      
     
    }
  
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={choreDesc} onChange={e => setChoreDesc(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
         <ChoreChart chores={choreLogs}/>
        </form>
       
        
      );
    
  }

  export default App