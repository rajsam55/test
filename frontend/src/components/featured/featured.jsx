import "./featured.css"
import useFetch   from "../hooks/useFetch.js"

import {Link} from "react-router-dom"






const Featured = ()=>{


    



    return(

        <div className="featured">

            <div className="featuredCont">
            <div className="featuredItems">
            <img src = "https://cf.bstatic.com/xdata/images/hotel/square240/427678099.webp?k=a8ff2c47360b54cf8ae980dbbcbb53d111fe1b0488776f7d8ba27756602cb775&o=" alt="" className="" />
           <h2 className = "featuredText">Berlin</h2>
            <Link to = "/post"><span className="propertyText"> 3 properties</span></Link>



            </div>

            <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square240/427678099.webp?k=a8ff2c47360b54cf8ae980dbbcbb53d111fe1b0488776f7d8ba27756602cb775&o=" alt="" className="" />
            <h2 className="featuredText">Madrid</h2>
            <span className="propertyText">1 property</span>



            </div>

            <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square240/427678099.webp?k=a8ff2c47360b54cf8ae980dbbcbb53d111fe1b0488776f7d8ba27756602cb775&o=" alt="" className="" />
            <h2 className="featuredText">London</h2>
            <span className="propertyText">2 properties</span>


            </div>





            </div>

            
        </div>
    )






}

export default Featured