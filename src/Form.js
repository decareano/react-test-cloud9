import React, { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

function Form(props) {
    const [id, setId] = useState(Date.now())
    const [date, setDate] = useState('');
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [pulse, setPulse] = useState('');
    // per john, no need for line 12
    //const [change, setChange] = useState('');
    
    const handleId = (event) => {
        setId(event.target.value)
      }


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
        //console.log(event.target.value)
        setPulse(event.target.value)

    }

    // below function not needed
    // const handleChange = (event) => {
    //     const { change, value } = event.target
    //     setChange({
    //         [change]: value

        
    //     })
    // }
    // john changed this from an inline code in return to an external function that is called on line 68 with the required onSubmit={handler}
    const handleFormChange = (event) => {
        event.preventDefault()
        // john first changed it to [] and later to {}. Confirmed it does not work with an array
        const data = {id, date, systolic, diastolic, pulse}
        props.handleSubmit(data)
        //event.handleChange(event)
        
    }

    const resetInputField = () => {
        setId(Date.now());
        setDate('');
        setSystolic('');
        setDiastolic('');
        setPulse('')

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

                onSubmit={handleFormChange}

                >
                <label htmlFor="date">Id</label>
                <input 
                    type="text"
                    name="id"
                    id="id"
                    //use defaultValue instead of value
                    value={id}
                    onChange={handleId} />
               
               
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

                    <input className="btn btn-primary"
                    type="reset"
                    value="Reset"
                    onClick={resetInputField} />
               


               </form>

               {/* <button onClick={resetInputField}>Reset</button> */}
            </>
            
  
            
            
            

            
        )
    
}



export default Form