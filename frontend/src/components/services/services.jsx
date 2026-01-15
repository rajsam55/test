import "./services.css"







import React from 'react'

const Services = () => {


    return (


        <div className="services">

            <div className="s-heading">

                <span className="">What We Serve</span>
                <span className="">Your favourite Food</span>
                <span className="">Our Delivery partners</span>
            </div>

            <div className="features">

                <div className="feature1">

                    <div className="imageWrapper">

                        <img src="/images/s1.png" alt="" objectFit="cover" className="" />

                    </div>

                    <span className="">Easy to order</span>
                    <span className="">you only need a few steps in food ordering</span>


                </div>

                <div className="feature2">

                    <div className="imageWrapper">
                        <img src="/images/s2.png" alt="" objectFit="cover" />
                    </div>

                    <span className="">Easy to order</span>
                    <span className="">Delivery is always on time, even faster</span>


                </div>

                <div className="feature3">

                    <div className="imageWrapper">
                        <img src="/images/s3.png" alt="" className="" objectFit="cover" />
                    </div>

                    <span className="">Easy to order</span>
                    <span className="">Not only fast with us but quality too is our main focus </span>



                </div>

            </div>







        </div>


    )
}

export default Services