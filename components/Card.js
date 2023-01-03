import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
        
            <div className="cardImgDiv">
                <img src={props.imageUrl} className="cardImg"/>
            </div>
                
            <div className="info-section">
                <div className="location-info">
                    <i className="bi bi-geo-alt-fill location-icon"></i>
                    <p className="country">{props.location}</p>
                    <p className="map-coordinates"><a href="">View on Google Maps</a></p>
                </div>
                
                <div className="text-info">
                    <h3 className="location-title">{props.title}</h3>
                    <h5 className="vacation-date">{props.startDate} - {props.endDate}</h5>
                    <p className="description">{props.description}</p>
                </div>
                
            </div>
    
        </div>
    )
}
