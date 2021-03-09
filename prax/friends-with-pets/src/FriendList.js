import React from 'react'
import Friend from "./Friend";
import Pet from "./Pet";
import friendInfo from './Friends.json'

const FriendList = () => {
    const friendMap = friendInfo.map((friend, i) => {
        return <Friend key={i + friend.name} 
            name={friend.name} 
            age={friend.age} 
            pets={friend.pets.map((pet, i) => {
                return <Pet key={i + pet.name} 
                    name={pet.name} 
                    breed={pet.breed}/>
            })}/>
    })

    return (
        <div>
            {friendMap}
        </div>
    )
}

export default FriendList