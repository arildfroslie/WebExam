import { useLocation } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import PlatformService from "../../services/PlatformService";
import IPlatform from "../../interfaces/IPlatform";
import ImageUploadService from "../../services/ImageUploadService";


const AddPlatform = () => {
    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");   
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [description, setDescription] = useState<string>("");

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "image":
                const {files} = e.target;
                if (files != null) {
                    const file = files[0]
                setImageFile(file);
                setImage(file.name)
            }
        }
    };

    const AddPlatform = async () => {
        const platform: IPlatform = {
            name,
            image,
            description
        };
       await PlatformService.addPlatform(platform);
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitPlatform = () => {
        AddPlatform();
        uploadImage();
    };

    return(
        <>
            <section className="add-container" id="add-function">

                <label
                    className="add-header"
                    >Add a {header}:
                </label> 

                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Title"
                    name="name"
                    onChange={changeHandler}
                    />

                    <input
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    name="description"
                    onChange={changeHandler}
                    />

                    <input 
                    className="file-input" 
                    onChange={changeHandler} 
                    type="file"
                    placeholder="Image"
                    name="image"
                    />

                    <input 
                    className="btn" 
                    type="button" 
                    value="Submit"
                    onClick={submitPlatform} 
                    />  

            </section>
        </>
    )
}

export default AddPlatform;