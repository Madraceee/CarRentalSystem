import React,{useEffect,useRef} from 'react'
import Button from './Button';

function UploadWidget({setImageUpload}) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName:"dmyda4l4p",
            uploadPreset: "cy7l4snq"
        },(error,result)=>{
            if(error){
                // console.log("Error")
                // console.log(error)
            }
            else{
                if(result.event === "success"){
                    setImageUpload(result.info.secure_url)
                }
            }
            
        })
    },[])
    return (
        <Button 
            BtnText={"Upload Image"}
            size={"medium"}
            color="White"
            method={()=>widgetRef.current.open()}
        />
    )
}

export default UploadWidget
