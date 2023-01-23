import {useEffect, useState} from "react";
import Header from "./Header";
import {Link, useParams} from 'react-router-dom';
import UserName from "./UserName";
import Menu from "./Menu";

const About = () =>{ 
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
                            <h1>{userinfo.name}</h1>
                            <p><span>email - </span>{userinfo.email}</p>
                            <p><span>address - </span>{  (userinfo.address) ? userinfo.address.street : "" } {  (userinfo.address) ? userinfo.address.suite : "" } {  (userinfo.address) ? userinfo.address.city : "" } {  (userinfo.address) ? userinfo.address.zipcode : "" }</p>
                            <p><span>phone - </span>{userinfo.phone}</p>
                            <p><span>website - </span>{userinfo.website}</p> 
                            <p><span>company - </span>{  (userinfo.company) ? userinfo.company.name : "" }</p>                                                                         
                        </div>                                                
                    </div> 
                </div>
            </div>           
        </>
    )
}

export default About