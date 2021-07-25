import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
    )
}

const TableBody = (props) => {
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
             </table>
        )
    }
}

export default Table