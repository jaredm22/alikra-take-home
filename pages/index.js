import { useEffect, useState } from 'react'
import Table from './components/Table'
import axios from 'axios'
import Overlay from './components/Overlay'

export default function Home() {

    const [searchInput, setSearchInput] = useState("")
    const [teams, setTeams] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [selectedTeam, setSelectedTeam] = useState("")

    const onTeamSelect = (team) => {
        setSelectedTeam(team)
    }

    const handleSearchInput = e => setSearchInput(e.target.value)

    const getTeams = async () => {
        await axios.get("https://www.balldontlie.io/api/v1/teams").then(res => setTeams(res.data.data))
    }

    useEffect(() => {
        getTeams()
    }, []) 
    
    useEffect(() => {
        const search = searchInput.toUpperCase()

        var searchResults = teams.filter(t => 
            t.name.toUpperCase().includes(search) ||
            t.city.toUpperCase().includes(search) || 
            t.abbreviation.toUpperCase().includes(search) ||
            t.conference.toUpperCase().includes(search) || 
            t.division.toUpperCase().includes(search) || 
            t.full_name.toUpperCase().includes(search)
            ? true : false
        )        
        setSearchResults(searchResults)
    }, [searchInput])

    return (
        <div className='container'>
            <h1>NBA TEAMS</h1>
            <input className='search-input-box' type="text" value={searchInput} onChange={handleSearchInput}/>
            <Table teams={searchInput == "" ? teams : searchResults} selectedTeam={selectedTeam} onTeamSelect={onTeamSelect}/>
            {selectedTeam != "" ? <Overlay/> : false}
        </div>
    )
}
