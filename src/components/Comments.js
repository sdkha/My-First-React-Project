import React from "react";
import Header from "./Header";
import UserName from "./UserName";
import Menu from "./Menu";
import {useEffect, useState} from "react";
import {useParams, Link} from 'react-router-dom';


const Comments = () =>{   
    let parms_data = useParams();
    const [postdata, setPost] = useState([]);
    const [commentData, setComment] = useState([]);
    const [count, setCount] = useState(0)
    const post_url = "https://jsonplaceholder.typicode.com/posts/"+parms_data.p_id;
    const comment_url = "https://jsonplaceholder.typicode.com/comments";    
    useEffect(() => {

    fetch(comment_url)
    .then(res => {
          if (!res.ok) {
          return Error("Oh no");
          }
          return res.json();
      })
    .then(data => {
        setComment(data)        
     });

     fetch(post_url)
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
    var postData_com = commentData.filter(function(i,index) {       
        return i.postId == parms_data.p_id;       
     });

    useEffect(() => {
       setCount(postData_com.length);
    });
    return(
        <>
        <div className="rt_home_wrapper">
            <div className="tr_home_inner">
                <Header/>  
                <div className="rt_back_btn">
                    <Link to={`/${parms_data.id}/posts`}> <img src={process.env.PUBLIC_URL+"/images/back_arrow.png"} alt="arrow"/>back </Link>               
                </div>                           
                <div className="rt_userdata">                                                    
                    <div className="rt_user_active">
                        <UserName/>
                    </div>
                    <Menu/>                                                                                               
                    <div className="rt_postdata">    
                   
                      
                        <div className="rt_postdata_inner">                            
                            <h4>{postdata.title}</h4>
                            <p>{postdata.body}</p>                                                                                                                                                                          
                        </div>                                         
                    
                
                <div className="rt_comment-count">                
                    <h4>comments ({count})</h4>
                </div>            
                    {postData_com.slice(0, 2).map((comments, index)=>{
                  
                        return(                            
                            <>
                            <div className="rt_postdata_inner">                                                       
                                <h4>{comments.name}</h4>
                                <Link>{comments.email}</Link>
                                <p>{comments.body}</p>
                            </div> 
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

export default Comments;