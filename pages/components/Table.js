import { useState, useEffect } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

export default function Table(props) {

    const [selectedTeam, setSelectedTeam] = useState("")

    const onTeamSelect = (team) => {
        setSelectedTeam(team)
    }

    return(
        <table className="teams-table">
            <thead>
                <tr> 
                    <th>Team Name</th>
                    <th>City</th>
                    <th>Abbreviation</th>
                    <th>Conference</th>
                    <th>Division</th>
                </tr>
            </thead>
            <tbody>
                {props.teams ? props.teams.map(t => 
                    <TableRow key={`tr-${t.name}`} {...t} selectHandler={onTeamSelect} selected={selectedTeam}/>    
                ) : false}
            </tbody>
        </table>
    )
}