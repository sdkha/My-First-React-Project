import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import UserName from "./UserName";
import {useEffect, useState} from "react";
import {useParams, Link} from 'react-router-dom';

const Album = () =>{
    let parms_data = useParams();
    const [albumdataa, setAlbum] = useState([]);
    
    const url = "https://jsonplaceholder.typicode.com/albums";    
    useEffect(() => {
    fetch(url)
    .then(res => {
          if (!res.ok) {
          return Error("Oh no");
          }
          return res.json();
      })
    .then(data => {
        setAlbum(data)        
     });
    }, []);


    if(parms_data.id){

        var albumData = albumdataa.filter(function(i,index) {       
             return i.userId == parms_data.id;       
          });
        } 
    return(
        <>
        <div className="rt_home_wrapper">
            <div className="tr_home_inner">
                <Header/>  
                <div className="rt_back_btn">
                    <Link to="/"> <img src={process.env.PUBLIC_URL+"/images/back_arrow.png"} alt="arrow"/>back </Link>               
                </div>                  
                <div className="rt_userdata">                                                    
                    <div className="rt_user_active">
                        <UserName/>
                    </div>
                    <Menu/>                                                                                               
                    <div className="rt_postdata">                    
                    {albumData.slice (0,5).map((albumd)=>{
                        return(
                            <>
                            <Link to={`/${parms_data.id}/albums/${albumd.id}/photos`}>
                                <div className="rt_postdata_inner rt_album">                            
                                    <h4>{albumd.title}</h4>
                                </div>
                            </Link>                                            
                            </>
                        )
                    })}                        
                    </div>
                </div>                     
            </div>
        </div>
        </>
    )
}

export default Album;