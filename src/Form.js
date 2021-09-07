
import React, { Component } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

class Form extends Component {
    
        initialState = {
            date: '',
            systolic: '',
            diastolic: '',
            pulse: '',
        }
        state = this.initialState
        
    



    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })

    }

    

    submitForm = () => {
        // edit in class: using ...this.state, id: Date.now() adds an ID or uniqueness to the item. then we pass the newState as props to handleSubmit method
        const newState = {
          ...this.state,
          id: Date.now()
        }
      
        this.props.handleSubmit(newState);
        this.setState(this.initialState);
    } 

    
    
    

    render() {
        const { date, systolic, diastolic, pulse} = this.state;
        

        return (
            <>
                
                {/* <Navbar bg="primary" variant="light"> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-primary " >
                
               <div className="col-lg-10" >
                    <h1 class="text-end">Marcelo's Blood Pressure Readings</h1>
                    
               </div>
               
               {/* </Navbar> */}
               </nav>
               
               <h1>Add new Readings: </h1>
               
           
                <label htmlFor="date">Month-Day</label>
                <input 
                    type="text"
                    name="date"
                    id="date"
                    //use defaultValue instead of value
                    value={date}
                    onChange={this.handleChange} />
                <label htmlFor="systolic">Systolic Pressure</label>
                <input
                    type="text"
                    name="systolic"
                    id="systolic"
                    value={systolic}
                    onChange={this.handleChange} />
                <label htmlFor="diastolic">Diastolic Pressure</label>
                <input
                    type="text"
                    name="diastolic"
                    id="diastolic"
                    value={diastolic}
                    onChange={this.handleChange} />
                <label htmlFor="pulse">Pulse</label>
                <input
                    type="text"
                    name="pulse"
                    id="pulse"
                    value={pulse}
                    onChange={this.handleChange} />

                <input className="btn btn-primary"
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />  

               
            </>
            
            
  
            
            
            

            
        )
    }
}



export default Form