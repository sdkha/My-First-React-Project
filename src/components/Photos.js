import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import UserName from "./UserName";
import {useEffect, useState} from "react";
import {useParams, Link} from 'react-router-dom';

const Photos = () =>{
    let parms_data = useParams();
    const [photosData, setUser] = useState([]);
    
    const url = "https://jsonplaceholder.typicode.com/photos";    
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
    
    var useData = photosData.filter(function(i,index) {       
        return i.userId == parms_data.id;       
     });

    return(
        <>
        <div className="rt_home_wrapper">
            <div className="tr_home_inner">
                <Header/>   
                <div className="rt_back_btn">
                    <Link to={`/${parms_data.id}/albums`}> <img src={process.env.PUBLIC_URL+"/images/back_arrow.png"} alt="arrow"/>back </Link>               
                </div>                                            
                <div className="rt_userdata">                                                    
                    <div className="rt_user_active">
                        <UserName/>
                    </div>
                    <Menu/>                                                                                               
                    <div className="rt_postdata"> 
                    {photosData.slice (0,1).map((photo)=>{
                        return(
                            <>
                                <div className="rt_postdata_inner rt_album">
                                    <h4>{photo.title}</h4>
                                </div> 
                            </>
                        )
                    })}
                        <div className="rt_photos">
                            <ul>
                                {photosData.slice (0,8).map((photo)=>{
                                    return(
                                    <>
                                        <li>
                                            <img src={photo.url}/>
                                        </li>                                                                                                
                                    </>
                                    )
                                })}                                
                            </ul>
                        </div>
                    </div>
                </div>                     
            </div>
        </div>
        </>
    )
}

export default Photos;