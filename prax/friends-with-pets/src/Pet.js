import React from 'react'

const Pet = (props) => {
    let {name, breed} = props

    return (
        <div>
            <h5>{name} :)</h5>
            <h5>Breed: {breed}</h5>
            <br/>
        </div>
    )
}

export default Pet