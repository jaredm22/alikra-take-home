import { useState, useEffect } from "react"
import {  getMainColor, getSecondaryColor } from "nba-color"


export default function Overlay(props) {

    const [teamColors, setTeamColors] = useState([])

    useEffect(() => {
        const colors = [getMainColor(props.abbreviation)['hex'], getSecondaryColor(props.abbreviation)['hex']]
        setTeamColors(colors)
    }, [])

    console.log(teamColors)

    return(
        <div className="overlay-container">
            
            <div className="side-card-container">
                <div 
                    className="side-card-header" 
                    style={teamColors != [] ? {background: teamColors[0], color: teamColors[1]} : {}}
                >
                    <h3>{props.name}</h3>
                    <button className="close-overlay-btn" onClick={props.handleOverlayClose} style={teamColors != [] ? {color: teamColors[1]} : {}}>x</button>
                </div>
                <div className="side-card-info-container">
                    <div className="side-card-left">
                        <h3>Team Full Name</h3>
                        <h3>Random Game Details</h3>
                        <h3>Date</h3>
                        <h3>Home Team</h3>
                        <h3>Home Team Score</h3>
                        <h3>Visitor Team</h3>
                        <h3>Visitor Team Score</h3>
                    </div>

                    <div className="side-card-right">
                        <h3>{props.full_name}</h3>
                        <h3></h3>
                        <h3>{props.randomGame.date}</h3>
                        <h3>{props.randomGame.home_team.full_name}</h3>
                        <h3>{props.randomGame.home_team_score}</h3>
                        <h3>{props.randomGame.visitor_team.full_name}</h3>
                        <h3>{props.randomGame.visitor_team_score}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}