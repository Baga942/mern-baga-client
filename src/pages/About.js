import React from 'react';
import './About.css'
import {useState, useEffect} from "react";
import Axios from "axios";

export default function About() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [listOfFriends, setListOfFriends] = useState([])

  const addFriend = () => {
    Axios.post('https://mern-baga.herokuapp.com/addfriend', {
      name:name,
      age: age
    }).then((response) => {
      setListOfFriends([...listOfFriends, {_id: response.data._id, name: name, age:age}])
    })
  }

  const updateFriend = (id) => {
    const newAge = prompt("Enter new Age: ")

    Axios.put('https://mern-baga.herokuapp.com/update', {newAge: newAge, id: id}).then(() => {
      setListOfFriends(listOfFriends.map((val) => {
        return val._id === id ? {_id: id, name: val.name, age: newAge} : val
      }))
    })
  }

  const deleteFriend = (id) => {
    Axios.delete(`https://mern-baga.herokuapp.com/delete/${id}`).then(() => {
      setListOfFriends(listOfFriends.filter((val)=> {
        return val._id !== id
      }))
    })
  }

  useEffect(() => {
    Axios.get('https://mern-baga.herokuapp.com/read').then((response) => {
      setListOfFriends(response.data)
    }).catch(() => {
      alert("nah, it is wrong")
    })
  }, [])



  return <div className="About">
    <div className="inputs">
    <input
        type="text"
        placeholder="Friends name"
        onChange={(event) => {
        setName(event.target.value)
    }}
    />
    <input
        type="number"
        placeholder="Friends age"
        onChange={(event) => {
        setAge(event.target.value)
    }}
    />
      <button onClick={addFriend}>Add friend</button>
    </div>

    <div className="listOfFriends">
    {listOfFriends.map((val) => {
      return (
          <div className="friendContainer">
            <div className="friend">
              <h3>Name: {val.name}</h3>
              <h3>Age: {val.age}</h3>
            </div>
            <button
                onClick={() => {
                  updateFriend(val._id)
                }}>Update</button>
            <button id="removeBtn" onClick={() => {
              deleteFriend(val._id)
            }}>X</button>
          </div>
      )
    })}
    </div>
  </div>
}
