import { useState, useEffect } from "react"
import {  getMainColor, getSecondaryColor } from "nba-color"


export default function TableRow(props) {

    const [teamColors, setTeamColors] = useState(["", ""])

    const selectHandler = (e) => {
        e.preventDefault()
        props.selectHandler(props.abbreviation)
    }


    useEffect(() => {
        const colors = [getMainColor(props.abbreviation)['hex'], getSecondaryColor(props.abbreviation)['hex']]
        setTeamColors(colors)
    }, [])

    return(
        <tr 
            className={`table-row ${props.abbreviation == props.selected ? "selected" : false}`} 
            key={props.abbreviation} 
            onClick={selectHandler}
            style={{background: teamColors[0], color: teamColors[1]}}
            // style={props.abbreviation == props.selected ? {background: teamColors[0], color: teamColors[1]} : {}}
        >
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.abbreviation}</td>
            <td>{props.conference}</td>
            <td>{props.division}</td>
        </tr> 
    )
}