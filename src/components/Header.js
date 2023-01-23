import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <div className="rt_header">
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <div className="rt_header_btn">
                    <Link to="" className="rt_btn">logout</Link>
                </div>
            </div>
        </>
    )
}
 
 export default Header