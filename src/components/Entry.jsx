import React from "react"

export default function Entry(props) {

    const img_str = "url(" + props.entry.imageUrl + ")"

    return (
        <div>
            <div className="entry">
                <div 
                    className="entry--img" 
                    style = {{ backgroundImage: img_str }}
                />
                <div className="entry--details">
                    <div className="entry--location">
                        <img src="/marker.svg" />
                        <span>{props.entry.location.toUpperCase()}</span>
                        <a href={props.entry.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>
                        {props.entry.title}
                    </h1>
                    <span>
                        {props.entry.startDate} - {props.entry.endDate}
                    </span>
                    <p>
                        {props.entry.description}
                    </p>
                    

                </div>
                
            </div>
            <hr />
        </div>
        
    )
}