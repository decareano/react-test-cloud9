import React from 'react'

const TableHeader = () => {
   return (
        <thead>
            <tr>
                <th>Date</th>
                <th>Reading</th>
                <th>Pulse</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const filas = props.marceloData.map((fila, index) => {
        return(
            <tr key={index}>
                <td>{fila.date}</td>
                <td>{fila.reading}</td>
                <td>{fila.pulse}</td>
                {/* //in class, we replace "index" by fila.id */}
                <td><button type="button" className="btn btn-primary" onClick={() => props.removeCharacter(fila.id)}>Delete</button></td>
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