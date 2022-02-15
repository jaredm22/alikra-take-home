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
            <tbody>
                {props.teams.map(t => 
                    <tr key={t.name}>
                        <td>{t.name}</td>
                        <td>{t.city}</td>
                        <td>{t.abbreviation}</td>
                        <td>{t.conference}</td>
                        <td>{t.division}</td>
                    </tr>    
                )}
            </tbody>
        </table>
    )
}