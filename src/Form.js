import React, { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

function Form(props) {
    
    const [date, setDate] = useState('');
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [pulse, setPulse] = useState('');
    // per john, no need for line 12
    //const [change, setChange] = useState('');
    
    


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
        console.log(event.target.value)
        setPulse(event.target.value)

    }
    // below function not needed
    // const handleChange = (event) => {
    //     const { change, value } = event.target
    //     setChange({
    //         [change]: value
        
    //     })
    // }
    // john changed this from an inline code in return so an external function that is called on line 68 with the required onSubmit={handler}
    const handleFormChange = (event) => {
        event.preventDefault()
        const data = {date, systolic, diastolic, pulse}
        props.handleSubmit(data)
        //event.handleChange(event)
    }
    
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
                onSubmit={handleFormChange}
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
                    // john changed type to "submit" from button and there was no need for the onChange event
                    type="submit"
                    value="Submit"
                />  

               </form>

               
            </>
            
  
            
            
            

            
        )
    
}



export default Form