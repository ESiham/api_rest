import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Home(){
    const [error, setError] = useState(null)
    const [isloaded, setIsLoaded] = useState(false)
    const [users, setUsers] = useState({"ref":"empty"})
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true)
                setUsers(data)
                
            },
            (error) =>{
                setIsLoaded(true)
                setError(error)
               
            }
            )
    },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    if(!isloaded){
        return <div>Loading ...</div>
    }
    else{
        return(
            
            <ul>
                {users.map(user => (
                <li >
                    <Link to={`user/${user.id}`}>{user.name}</Link>
                </li>
                ))}
            </ul>
            
        )
    }


    
}
export default Home;