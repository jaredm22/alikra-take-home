export default function Overlay(props){
    console.log(props)

    return(
        <div className="overlay-container">
            
            <div className="side-card-container">
                <div className="side-card-header">
                    <h5>{props.name}</h5>
                    <button className="close-overlay-btn" onClick={props.handleOverlayClose}>&times</button>
                </div>
                <div className="side-card-info-container">
                    <div className="side-card-left">
                        <h5>Team Full Name</h5>
                        <h5>Total Games in 2021</h5>
                        <h5>Random Game Details</h5>
                        <h5>Date</h5>
                        <h5>Home Team</h5>
                        <h5>Home Team Score</h5>
                        <h5>Visitor Team</h5>
                        <h5>Visitor Team Score</h5>
                    </div>

                    <div className="side-card-right">
                        <h5>{props.full_name}</h5>
                        <h5>{88}</h5>
                        <h5>Random Game Details</h5>
                        <h5>Date</h5>
                        <h5>Home Team</h5>
                        <h5>Home Team Score</h5>
                        <h5>Visitor Team</h5>
                        <h5>Visitor Team Score</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}