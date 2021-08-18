import React from 'react'

const TableHeader = () => {
   return (
        <thead>
            <tr>
                <th>Date</th>
                <th>Reading</th>
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
            </tr>
        )
    })
    return <tbody>{filas}</tbody>
}

class Table extends React.Component {
    render() {
        const {marceloData} = this.props
        return (
            <div className="mydiv">
            <TableHeader />
            <TableBody marceloData={marceloData} />
            </div>

        )
    }


}

export default Table