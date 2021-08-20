
import React, { Component } from 'react'

class Form extends Component {
   initialState = {
       date: '',
       reading: '',
   }
   state = this.initialState

// the date is the key and value is the input....hmmmmmm
    handleChange = (event) => {
        const {date, value} = event.target

        this.setState({
            [date]: value
        })
    }

    render() {
        const { date, reading } = this.state

        return (
            <form>
                <label htmlFor="date">Month-Day</label>
                <input
                type="text"
                    name="date"
                    id="date"
                    //use defaultValue instead of value
                    defaultValue={date}
                    onChange={this.handleChange} />
                <label htmlFor="reading">Blood Pressure Reading</label>
                <input
                    type="text"
                    name="reading"
                    id="reading"
                    defaultValue={reading}
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