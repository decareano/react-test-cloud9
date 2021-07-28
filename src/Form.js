import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
        
    }
    state = this.initialState


/* make a function that will run everytime a change is made to an input */
    handleChange = (event) => {
        const {name, value} = event.target
    
        this.setState({
            [name]: value
        })

    }
    
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render() {
    const {name, job} = this.state
    return (
        <form pinga={this.submitForm}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange} />
        
        <input
            type="button"
            name="Submit"
            onClick={this.submitForm} />
        <button type="Submit">
            Submit
        </button>
        </form>
            
        
    ) 
    }
    
}


export default Form