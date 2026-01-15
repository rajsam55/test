
import  SanityClient  from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client =  SanityClient({
    projectId : "x34uiftk",
    dataset : "production",
    apiVersion : "2022-11-17" ,
    useCdn : true,
    token :  "skWene673ROAnX0EixcPtJiFbIROMP2zhVuhMh9G8touz6Z3jgRBdXyeK96RFvliDy5TgWDh0UujXhDUNxT8zC4ngHobgmkSMoFeaa7tVRXC0thJmD5iFA87qEfz0Y4BBlNCdFOSZ4DUPARtDMLFzJLzFF5zW5DYSeP5P9Sfxuf1q7v4xywe"

})



const builder = imageUrlBuilder(client)


export const urlFor = (source)=>builder.image(source)

