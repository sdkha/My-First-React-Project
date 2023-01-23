import React from "react";
import {NavLink, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

const Menu = () =>{
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

    return(
        <>
        <div className="rt_navlist">
            <ul>
                <li><NavLink activeclassname="active" to ={`/${userinfo.id}/about`}>about</NavLink></li>
                <li><NavLink activeclassname="active" to ={`/${userinfo.id}/posts`}>posts</NavLink></li>
                <li><NavLink activeclassname="active" to ={`/${userinfo.id}/albums`}>albums</NavLink></li>
            </ul>
        </div> 
        </>
    )
}


export default Menu;