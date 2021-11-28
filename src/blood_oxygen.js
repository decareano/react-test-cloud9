import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const BloodOxygen = (props) => {
  const { loginWithRedirect } = useAuth0()

  const handleFormChange = (event) => {
    event.preventDefault()
    // john first changed it to [] and later to {}. Confirmed it does not work with an array
    const data = {id, oxygen, pulse}
    props.handleSubmit(data)
    //event.handleChange(event)
    
}
// added by Marcelo. John please review
const resetInputField = () => {
    setId(Date.now());
    setOxygen('');
   
    setPulse('');

}

const handleId = (event) => {
    setId(event.target.value)
  }


const handleDate = (event) => {
    setDate(event.target.value)

}


  return (
    <div className="container">

               <nav class="navbar navbar-expand-lg navbar-light bg-primary " >
                {/* //john centered header below */}
               <div style={{margin: "0 auto"}} >
                    <h1 class="text-end">Blood Oxygen Levels</h1>
                    
               </div>
               
               {/* </Navbar> */}
               </nav>
               
               <h1>Add new Readings: </h1>
                <form

                onSubmit={handleFormChange}

                >
                
                </form>
                </div>
  )
  }

export default BloodOxygen