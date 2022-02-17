import { useState, useEffect } from 'react'
import TableRow from './TableRow'

export default function Table(props) {

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
            <tbody className="table-body">
                {props.teams ? props.teams.map(t => 
                    <TableRow key={`tr-${t.name}`} {...t} selectHandler={props.handleTeamSelect} selected={props.selectedTeam}/>    
                ) : false}
            </tbody>
        </table>
    )
}