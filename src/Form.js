
import React, { Component } from 'react'

class Form extends Component {
    
        initialState = {
            date: '',
            reading: '',
        }
        state = this.initialState
        
    



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
        const { date, reading } = this.state;

        return (
            <form className="form-inline">
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

                <input className="btn btn-primary"
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />    
            </form>
        )
    }
}


export default Form