import React from 'react'

const TableHeader = () => {
   return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Systolic</th>
                <th>Diastolic</th>
                <th>Pulse</th>
                <th>Edit</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    
    const filas = props.marceloData.map((fila, index) => {
        console.log('fila', fila)
        return(
            <tr key={index}>
                <td>{fila.id}</td>
                <td>{fila.date}</td>
                <td>{fila.systolic}</td>
                <td>{fila.diastolic}</td>
                <td>{fila.pulse}</td>
                <td>{fila.edit}</td>
                {/* //in class, we replace "index" by fila.id
                <td><button type="button" className="btn btn-primary" onClick={this.sayHello}>Edit</button></td> */}
               
                <td><button type="button" className="btn btn-primary" onClick={e =>
                        window.confirm("Are you sure you wish to clear the page?") >
                        props.removeCharacter(fila.id)}>Delete</button></td>
            </tr>
        )
    })
    return <tbody>{filas}</tbody>
}

const Table = (props) => {
    
        const {marceloData, removeCharacter } = props
        
        
        return (
            <table>
            <TableHeader />
            <TableBody marceloData={marceloData} removeCharacter={removeCharacter} />
            </table>

        )
   


}

export default Table