import {useState, useEffect}  from "react"
import axios from "axios"
import Image from "../imageForm/imageForm"








const ImgContainer = (newImage) => {



    const API_URL = "http://localhost:6500/"

    const [images, setImages] = useState([])

    const [fallback, setFallback] = useState("")




    useEffect(() => {

        const getImages = async () => {

            try {

                const res = await axios.get("API_URL", "api/images")
                if (!res.data.files) {

                    setFallback(res.data.msg)
                    return

                } else {

                    setImages(res.data.files)
                }

            } catch (err) {

                console.log(err.msg)


            }


        }

        getImages()


    }, [newImage])

    



    
    console.log(images)






    return (



        <div>


            {images.map(image => (


                <div className="">


                    <Image image = {image}/>


                </div>

                



            ))}

            <h2 className="">{fallback}</h2>

            








        </div>
    )
}

export default ImgContainer