import React from "react";
import Header from "./Header";
import UserName from "./UserName";
import Menu from "./Menu";
import {useEffect, useState} from "react";
import {Link,useParams} from 'react-router-dom';

const Post = () =>{    
    let parms_data = useParams();
    const [postdata, setPost] = useState([]);
    
    const url = "https://jsonplaceholder.typicode.com/posts/";    
    useEffect(() => {
    fetch(url)
    .then(res => {
          if (!res.ok) {
          return Error("Oh no");
          }
          return res.json();
      })
    .then(data => {
      setPost(data)        
     });
    }, []);
         
    if(parms_data.id){

    var userData = postdata.filter(function(i,index) {       
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
                        {userData.slice(0, 3).map((postdataa, index)=>{
                            var index = index + 1 
                            return(
                            <Link to={`/${parms_data.id}/posts/${postdataa.id}/comments`}>
                                <div className="rt_postdata_inner">
                                    <h4>#{index} - {postdataa.title}</h4>
                                    <p>{postdataa.body}</p>
                                </div>
                            </Link>
                            )
                        })}  
                    </div>
                    </div>                     
                </div>
            </div> 
            
        </>
    )
}

export default Post;
