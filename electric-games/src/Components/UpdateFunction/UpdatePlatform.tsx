import { useState, ChangeEvent, useRef, useContext, useEffect } from "react";
import IPlatform from "../../interfaces/IPlatform";
import PlatformService from "../../services/PlatformService";
import { useLocation } from "react-router-dom";
import { PlatformContext } from "../../context/PlatformContext";
import ImageUploadService from "../../services/ImageUploadService";

const UpdatePlatform = () => {
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const platformContext = useContext(PlatformContext);

    const getPlatformFromService = async (id: number) => {
        console.log("I am trying to get:" + id);
        const platform = await PlatformService.getPlatformById(id);
        setId(platform.id);
        setName(platform.name);
        setDescription(platform.description);
        setImage(platform.image);
        setImageFile(platform.imageFile);
    };

    useEffect(()=> {
        if (platformContext?.platformToEdit && platformContext.platformToEdit.id) {
            getPlatformFromService(platformContext?.platformToEdit.id) 
        }
    },[platformContext?.platformToEdit?.id]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(id);
                break;
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
                break;
        }
    };

    const editPlatform = async () => {
        const platform: IPlatform = {
            id,
            name,
            image,
            description,
        };
        await PlatformService.updatePlatform(platform);
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitChange = () => {
        editPlatform();
        uploadImage();
        window.location.reload();
    }

    return(
    
    <section className="update-container" id="update-platform">
        <label
            className="add-header">
            Update {header}:
        </label>

        <input 
            className="text-input" 
            type="text" 
            placeholder="Name" 
            onChange={changeHandler}
            name='name'
            value={name}
        />

        <input 
            className="text-input" 
            type="text" 
            placeholder="Description" 
            onChange={changeHandler}
            name='description'
            value={description}
        />

        <label className="file-input-label">
            Press to Add Image
            <input 
                className="file-input" 
                onChange={changeHandler} 
                type="file"
                placeholder="Image"
                name="image"
            /> 
        </label> <br />

        <button 
            className="btn" 
            onClick={submitChange}>
            Save Changes
        </button>

    </section>
    )
};

export default UpdatePlatform;