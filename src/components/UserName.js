import React from "react";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';


const UserName = () =>{
    let parms_data = useParams();
    const [userinfo, setUser] = useState([]);
    
    const url = "https://jsonplaceholder.typicode.com/users/"+parms_data.id;    
    useEffect(() => {
    fetch(url)
    .then(res => {
          if (!res.ok) {
          return Error("Oh no");
          }
          return res.json();
      })
    .then(data => {
      setUser(data)        
     });
    }, []);

     const user_name_later = (username) => {
        const myArray = username.split(" ");
        let fname =myArray[0].split('');
        let lname =myArray[1].split('');
        return fname[0]+lname[0];
    }

    return(
        <>
            <div className="rt_userinfo">
                <div className="rt_user_profile"> 
                    <span>{
                        (userinfo.name) ? user_name_later(userinfo.name) : ""
                    }</span>                                   
                </div>                                
                <div className="rt_user_name">                                    
                    <h4>{ userinfo.name}</h4>
                    <p>{ userinfo.email}</p>                                    
                </div> 
            </div>
        </>
    )
}

export default UserName;