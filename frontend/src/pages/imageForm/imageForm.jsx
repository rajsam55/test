import { useState } from "react"

const Image = ({image}) => {

   

    const API_URL = "http://localhost:6500/"





    const configureImage = (image) => {

        return API_URL + image;

    }



    return (



        <div>


            <img src={configureImage(image)} alt="" className="" key={image} />
            <img src={URL.createObjectURL(image)} alt="" className="" key={image} />
            <span className="">{image.name}</span>



        </div>




    )


}

export default Image