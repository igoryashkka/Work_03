import React from "react"
import './User.css'
const User = ({user}) => {
  return (
    <div className="card" >
       <div className="card__title">{user.name.first} {user.name.last}</div>
        <div className="card__body">
        <div>{user.gender}</div>
        <div>{user.dob.date.substr(0,10)}</div>
        <div>{user.nat}</div>
        <img className="card__image" src={user.picture.medium} alt="person"/>
        </div>
    </div> 
    )
}

export default User;
