import React from "react"

const Card = (props) => {

    let styles
    if(props.timeToGo === "Winter" || props.timeToGo === "Spring"){
        styles = {backgroundColor: "lightBlue"}
    } else {
        styles = {backgroundColor: "tan"}
    }

    let dollaz
    if(props.price <= 500){
        dollaz = "$"
    } else if(props.price > 500 && props.price <= 1000){
        dollaz = "$$"
    } else {
        dollaz = "$$$"
    }
    
    return (
        <div style={styles} className="place-card">
            <h1>{props.place} {dollaz}</h1>
            <h4>${props.price}</h4>
            <h3 >{props.timeToGo}</h3>
        </div>
    )
}

export default Card