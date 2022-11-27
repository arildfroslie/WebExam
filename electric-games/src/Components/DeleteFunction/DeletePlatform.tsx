import { useContext} from "react";
import { PlatformContext } from "../../context/PlatformContext";
import IPlatformContext from "../../interfaces/IPlatformContext";
import { FC } from "react";
import IPlatform from "../../interfaces/IPlatform";

const DeletePlatform: FC< Pick<IPlatform,"id">> = ({id}) => {
    const {platforms, deletePlatformById} = useContext(PlatformContext) as IPlatformContext;

    const platform = platforms.find(thisPlatform => {
        return thisPlatform.id === id;
    });

    const deletePlatform = () => {
        if (window.confirm("Are you sure you want to delete: " + platform?.name + "?")) {
            deletePlatformById(id!)
            window.location.reload();
        }
    }

    return(
            <button className="delete-icon" onClick={deletePlatform}>
                <i className="fa-regular fa-trash-can fa-xl"></i>
            </button>
    )
}

export default DeletePlatform;