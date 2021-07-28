import React from 'react'

const TableHeader = () => {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>
    )
}

const TableBody = (props) => {
<<<<<<< HEAD
    const rows = props.charData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr> 
        )
    })
    
    
    return <tbody>{rows}</tbody>
                
    
}

class Table extends Component {
    render() {
        const {charData} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody charData={charData}/>
=======
    // we remove the data in html tags to app as an array of objects
    const rows =  props.charData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeChar(index)}>Delete</button></td>
            </tr>
        )
    })
    
    return <tbody>{rows}</tbody>
                
}

const Table = (props) => {
    const {charData, removeChar} = props
        return (
            <table>
                <TableHeader />
                <TableBody charData={charData} removeChar={removeChar}/>
>>>>>>> master
             </table>
        )
    
}

export default Table