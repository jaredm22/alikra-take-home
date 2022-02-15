import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/Table'


export default function Home() {

    const [teamData, setTeamData] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const getTeamData = async () => {
        await axios.get("https://www.balldontlie.io/api/v1/teams").then(res => setTeamData(res.data.data))
    }

    useEffect(() => {
        getTeamData()
    }, [])

    console.log(teamData)

    return (
        <div className='container'>
            <h1>NBA TEAMS</h1>
            <input type="text" value={searchInput} onChange={e => setSearchInput(e.value)}/>
            <Table teams={teamData}/>
        </div>
    )
}
