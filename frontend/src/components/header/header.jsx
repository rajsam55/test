import "./header.css"



const Header = () => {










    return (

        <div className="header">

            <div className="h-container">


                <div className="h-left">

                    <span className="topText">More than faster</span>

                    <span className="">Be The Fastest</span>
                    <span className="">In Delivering</span>
                    <span className="">Your <span className="" style={{ color: "orange" }}>Pizza</span></span>

                    <span className="miniText">Our mission is to give an efficient & reliable service to our customers without any hassle.</span>

                    <button className="btn">Get Started</button>


                </div>



                <div className="h-right">

                    <div className="image-container">

                        <img src="/images/heroImage2.png" alt="" className="img" />

                    </div>

                </div>






            </div>


        </div>




    )
}

export default Header