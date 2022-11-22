import { useState, ChangeEvent, useRef } from "react";
import IPlatform from "../../interfaces/IPlatform";
import PlatformService from "../../services/PlatformService";
import { useLocation } from "react-router-dom";

const UpdatePlatform = () => {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    const getPlatformFromService = async () => {
        const platform = await PlatformService.getPlatformById(parseInt(id));
        setName(platform.name);
        setDescription(platform.description);
        setImage(platform.image);
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
        }
    };

    const editPlatform = async () => {
        const platform: IPlatform = {
            id : parseInt(id),
            name,
            image,
            description,
        };
        await PlatformService.updatePlatform(platform);
        window.location.reload();
    };

    return(
        <>
            <section className="update-container">
                <label>Update a {header}:</label><br/>
                <div className="update-element">
                    <input 
                    className="text-input-id" 
                    type="number" 
                    placeholder="id" 
                    onChange={changeHandler}
                    name='id'
                    value={id}
                    />
                    <button className="btn" onClick={getPlatformFromService}>Get Platform</button>
                </div>
                
                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Name" 
                    onChange={changeHandler}
                    name='name'
                    value={name}
                    />
                </div>

                <div className="update-element">
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Platform" 
                    onChange={changeHandler}
                    name='description'
                    value={description}
                    />
                </div>

                <div className="update-element">
                    <button 
                    className="btn" 
                    onClick={editPlatform}>Save Changes</button>
                </div>

            </section>
        </>
    )
};

export default UpdatePlatform;