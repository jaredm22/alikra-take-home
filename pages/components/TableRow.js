

export default function TableRow(props) {

    const selectHandler = (e) => {
        e.preventDefault()
        props.selectHandler(props.name)
        console.log(props.name)
    }

    return(
        <tr className={`table-row ${props.name == props.selected ? "selected" : false}`} key={props.name} onClick={selectHandler}>
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.abbreviation}</td>
            <td>{props.conference}</td>
            <td>{props.division}</td>
        </tr> 
    )
}