import React from "react"
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App() {
    
    const locations = data.map(item => {
        return <Card 
                    key={item.id}
                    {...item}
                    
                    //These are showing the properties of the component Card; assuming I wanted to list out each property and map them to their respective key-value pairs from the data file, I could do it this way. Although, the spread operator makes it easier and faster, plus it avoids more errors.
                    
                    // title={item.title}
                    // location={item.location}
                    // googleMapsUrl={item.googleMapsUrl}
                    // startDate={item.startDate}
                    // endDate={item.endDate}
                    // description={item.description}
                    // imageUrl={item.imageUrl}
                />
    })
    
    return (
        <div>
            <Header />
            {locations}
        </div>
    )
}
