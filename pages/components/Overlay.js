import { useState, useEffect } from "react"
import {  getMainColor, getSecondaryColor } from "nba-color"


export default function Overlay(props) {

    const [teamColors, setTeamColors] = useState([])

    useEffect(() => {
        const colors = [getMainColor(props.abbreviation)['hex'], getSecondaryColor(props.abbreviation)['hex']]
        setTeamColors(colors)
    }, [])

    let dateTime = ["2021-12-31"]
    if (props.randomGame) {
        dateTime = props.randomGame.date.split("T")
    }

    return(
        <div className="overlay-container">
            
            <div className="side-card-container">
                <div 
                    className="side-card-header" 
                    style={teamColors != [] ? {background: teamColors[0], color: teamColors[1]} : {}}
                >
                    <h3>{props.full_name}</h3>
                    <button className="close-overlay-btn" onClick={props.handleOverlayClose} style={teamColors != [] ? {color: teamColors[1]} : {}}>x</button>
                </div>

                <h3 className="random-game-details">Random Game Details</h3>
                
                <div className="side-card-info-container">
                    <div className="side-card-left">
                        <h3>Date</h3>
                        <h3>Home Team</h3>
                        <h3>Home Team Score</h3>
                        <h3>Visitor Team</h3>
                        <h3>Visitor Team Score</h3>
                    </div>

                    <div className="side-card-right">
                        <h3>{dateTime[0]}</h3>
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