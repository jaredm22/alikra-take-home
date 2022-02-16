import { useEffect, useState } from 'react'
import Table from './components/Table'
import axios from 'axios'
import Overlay from './components/Overlay'

export default function Home() {

    const [searchInput, setSearchInput] = useState("")
    const [teams, setTeams] = useState([])
    const [selectedTeam, setSelectedTeam] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [games, setGames] = useState([])

    const handleTeamSelect = (team) => setSelectedTeam(team)
    const handleSearchInput = e => setSearchInput(e.target.value)
    const handleOverlayClose = () => setSelectedTeam("")

    // fetch teams data from api
    useEffect(() => {
        const getTeams = async () => {
            await axios.get("https://www.balldontlie.io/api/v1/teams").then(res => setTeams(res.data.data))
        }

        getTeams()
    })
    
    // fetch games data
    useEffect(() => {
        const getGames = async () => {
            await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2021`).then(res => setGames(res.data.data))
        }
        getGames() 
    })

    if (games != []) {
        console.log(games)
        let sortedGames = []
    }
    
    // search and sort handler
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
            <Table teams={searchInput == "" ? teams : searchResults} selectedTeam={selectedTeam} handleTeamSelect={handleTeamSelect}/>
            {selectedTeam != "" ? 
                <Overlay {...teams.find(t => t.abbreviation === selectedTeam)} handleOverlayClose={handleOverlayClose}/> : false
            }
        </div>
    )
}
