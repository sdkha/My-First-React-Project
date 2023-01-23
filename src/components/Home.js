import React from "react";
import { useState } from "react";
import Header from "./Header";
import {  Link } from "react-router-dom";

const Home = () =>{
    const [posts, setPosts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";   
    useState(() => {
    fetch(url)
      .then(res => {
            if (!res.ok) {
            return Error("Oh no");
            }
            return res.json();
        })
      .then(data => setPosts(data));
    });
    
    const user_name_later = (username) => {
        const myArray = username.split(" ");
        let fname =myArray[0].split('');
        let lname =myArray[1].split('');
        return fname[0]+lname[0];
    }

    return(
        <>
            <div className="rt_home_wrapper">
                <div className="tr_home_inner">
                    <Header/>                    
                    <div className="rt_userdata">
                        {posts.map((user)=>{
                            return(
                            <div className="rt_userinfo">
                                <div className="rt_user_profile"> 
                                    <span>{user_name_later(user.name)}</span>                                   
                                </div>                                
                                <div className="rt_user_name">
                                    <Link to={`/${user.id}/about`}>
                                        <h4>{user.name}</h4>
                                        <p>{user.email}</p>
                                    </Link>
                                </div>
                                <div className="rt_user_icon">     
                                <Link to={`/${user.id}/about`}>
                                    <svg width="44" height="42" viewBox="0 0 44 42">
                                        <path d="M22.4736 0.00390388C15.0273 -0.0156274 8.47461 3.83691 4.72949 9.65723C4.56348 9.91601 4.74902 10.2578 5.05664 10.2578H8.48926C8.72363 10.2578 8.94336 10.1553 9.08984 9.97461C9.43164 9.55957 9.79785 9.15918 10.1836 8.77832C11.7754 7.1914 13.626 5.9414 15.6865 5.07226C17.8154 4.17383 20.0811 3.71484 22.4199 3.71484C24.7588 3.71484 27.0244 4.16894 29.1533 5.07226C31.2139 5.9414 33.0645 7.1914 34.6562 8.77832C36.248 10.3652 37.4932 12.2158 38.3672 14.2715C39.2705 16.4004 39.7246 18.6611 39.7246 21C39.7246 23.3389 39.2656 25.5996 38.3672 27.7285C37.498 29.7842 36.248 31.6348 34.6562 33.2217C33.0645 34.8086 31.2139 36.0586 29.1533 36.9277C27.0227 37.8276 24.7328 38.2893 22.4199 38.2852C20.0811 38.2852 17.8154 37.8262 15.6865 36.9277C13.63 36.0595 11.7613 34.8009 10.1836 33.2217C9.79785 32.8359 9.43652 32.4355 9.08984 32.0254C8.94336 31.8447 8.71875 31.7422 8.48926 31.7422H5.05664C4.74902 31.7422 4.55859 32.084 4.72949 32.3428C8.46973 38.1484 14.9932 41.9961 22.4199 41.9961C33.9531 41.9961 43.3184 32.7139 43.4355 21.2148C43.5527 9.53027 34.1729 0.0332008 22.4736 0.00390388ZM16.2881 26.4688V22.7578H0.956055C0.741211 22.7578 0.56543 22.582 0.56543 22.3672V19.6328C0.56543 19.418 0.741211 19.2422 0.956055 19.2422H16.2881V15.5312C16.2881 15.2041 16.6689 15.0186 16.9229 15.2236L23.8516 20.6924C23.8983 20.7289 23.936 20.7756 23.962 20.8289C23.9879 20.8822 24.0014 20.9407 24.0014 21C24.0014 21.0593 23.9879 21.1178 23.962 21.1711C23.936 21.2244 23.8983 21.2711 23.8516 21.3076L16.9229 26.7764C16.6689 26.9766 16.2881 26.7959 16.2881 26.4688Z"/>
                                    </svg>                     
                                </Link>               
                                </div>
                            </div>
                            )                            
                        })}                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;