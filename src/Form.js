import React, { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

function Form(props) {
    
    const [date, setDate] = useState('');
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [pulse, setPulse] = useState('');
    const [change, setChange] = useState('');
    
    


    const handleDate = (event) => {
        setDate(event.target.value)

    }
    
    const handleSystolic = (event) => {
        setSystolic(event.target.value)

    }
    
    const handleDiastolic = (event) => {
        setDiastolic(event.target.value)

    }
    
    const handlePulse = (event) => {
        setPulse(event.target.value)

    }

    const handleChange = (event) => {
        const { change, value } = event.target.value
        setChange({
            [change]: value
        
        })
    }

    // const submitForm = () => {
    //     // edit in class: using ...this.state, id: Date.now() adds an ID or uniqueness to the item. then we pass the newState as props to handleSubmit method
        
      
    //     props.handleSubmit(change);
        
       
    // } 
    
        return (
            <>
                
                <nav class="navbar navbar-expand-lg navbar-light bg-primary " >
                
               <div className="col-lg-10" >
                    <h1 class="text-end">Marcelo's Blood Pressure Readings</h1>
                    
               </div>
               
               {/* </Navbar> */}
               </nav>
               
               <h1>Add new Readings: </h1>
                <form
                onSubmit={event => {
                   
                    
                   handleChange(change);
                }}
                >
               
               
                <label htmlFor="date">Month-Day</label>
                <input 
                    type="text"
                    name="date"
                    id="date"
                    //use defaultValue instead of value
                    value={date}
                    onChange={handleDate} />
                <label htmlFor="systolic">Systolic Pressure</label>
                <input
                    type="text"
                    name="systolic"
                    id="systolic"
                    value={systolic}
                    onChange={handleSystolic} />
                <label htmlFor="diastolic">Diastolic Pressure</label>
                <input
                    type="text"
                    name="diastolic"
                    id="diastolic"
                    value={diastolic}
                    onChange={handleDiastolic} />
                <label htmlFor="pulse">Pulse</label>
                <input
                    type="text"
                    name="pulse"
                    id="pulse"
                    value={pulse}
                    onChange={handlePulse} />

                <input className="btn btn-primary"
                    type="button"
                    value="Submit"
                    onClick={handleChange} />  
                {/* <button onClick={submitButton}>Submit Now</button> */}
               </form>

               
            </>
            
  
            
            
            

            
        )
    
}



export default Form