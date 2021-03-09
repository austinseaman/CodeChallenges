import React from 'react'

const Friend = (props) => {
    let {name, age, pets} = props
    return (
        <div className="friend-container">
            <h1>{name}!</h1>
            <h3>Age: {age}</h3>
            <h3>{name}'s pets: {pets}</h3>
            <br/>
        </div>
    )
}

export default Friend