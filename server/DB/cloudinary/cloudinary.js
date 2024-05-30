import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

const saveImgToCloud = async (img) => {
    const arrayBuffer = await img.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    const imgLink = new Promise((res) => {
        cloudinary.uploader.upload_stream({ folder: "recipeImage" }, (err, uploadRes) => {
            return res(uploadRes)
        }).end(buffer)
    }).then(uploadedImg => {
        return uploadedImg.url
    })
    return imgLink
}

export { saveImgToCloud }