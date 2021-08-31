
import React, { Component } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

class Form extends Component {
    
        initialState = {
            date: '',
            reading: '',
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
        // const newState = {
        //   ...this.state,
        //   id: Date.now()
        // }
      
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    } 
    
    

    render() {
        const { date, reading, pulse} = this.state;
        

        return (
            <>
                
                {/* <Navbar bg="primary" variant="light"> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-primary " >
                
               <div className="col-lg-10" >
                    <h1 class="text-end">Marcelo's Blood Pressure Readings</h1>
                    
               </div>
               
               {/* </Navbar> */}
               </nav>
               <h3>Add new readings: </h3>

               
           
                <label htmlFor="date">Month-Day</label>
                <input 
                    type="text"
                    name="date"
                    id="date"
                    //use defaultValue instead of value
                    value={date}
                    onChange={this.handleChange} />
                <label htmlFor="reading">Blood Pressure Reading</label>
                <input
                    type="text"
                    name="reading"
                    id="reading"
                    value={reading}
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