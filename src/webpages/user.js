import React,  {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function User(){
 
 const [error, setError] =useState(null)
 const [isloaded, setIsLoaded] = useState(false)
 const [user, setUser] = useState([])
let {id} = useParams()
console.log(id)
 useEffect(()=>{
     function fetchApi(){
        fetch("https://jsonplaceholder.typicode.com/users/"+id)
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true)
                setUser(data)
                console.log(data)
            },
            (error) =>{
                setIsLoaded(true)
                setError(error)
            }
            )
     }
     fetchApi()
  
},[])
if(error){
    return <div>Error: {error.message}</div>
}
if(!isloaded){
    return <div>Loading ...</div>
}
if(user){
    return(
        <div>
                <h1>{user.name}</h1>
                <div>
                    Email: {user.email}
                </div>
                <div>
                    Phone: {user.phone}
                </div>
                <div>
                    Website: {user.website}
                </div>
            </div>
    )
}
}
export default User;