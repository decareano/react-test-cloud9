
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

    handleSubmit = event => {
        event.preventDefault();
        let name = this.refs.name.value;
        let role = this.refs.role.value;
        let uid = this.refs.uid.value;
    
        if (uid && name && role) {
          const { developers } = this.state;
          const devIndex = developers.findIndex(data => {
            return data.uid === uid;
          });
          developers[devIndex].name = name;
          developers[devIndex].role = role;
          this.setState({ developers });
        } else if (name && role) {
          const uid = new Date().getTime().toString();
          const { developers } = this.state;
          developers.push({ uid, name, role });
          this.setState({ developers });
        }
    
        this.refs.name.value = "";
        this.refs.role.value = "";
        this.refs.uid.value = "";
      };

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    removeData = character => {
        const { characters } = this.state;
        const newState = characters.filter(data => {
          return data.uid !== character.uid;
        });
        this.setState({ characters: newState });
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
                    value={this.date}
                    onChange={this.handleChange} />
                <label htmlFor="reading">Blood Pressure Reading</label>
                <input
                    type="text"
                    name="reading"
                    id="reading"
                    value={this.reading}
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