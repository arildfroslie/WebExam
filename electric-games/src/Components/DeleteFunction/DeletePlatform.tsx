import { useContext} from "react";
import { PlatformContext } from "../../context/PlatformContext";
import IPlatformContext from "../../interfaces/IPlatformContext";
import { FC } from "react";
import IPlatform from "../../interfaces/IPlatform";

const DeletePlatform: FC< Pick<IPlatform,"id">> = ({id}) => {
    const {platforms, deletePlatformById} = useContext(PlatformContext) as IPlatformContext;

    const deletePlatform = () => {
        if (window.confirm("Are you sure you want to delete this?")) {
            deletePlatformById(id!)
            window.location.reload();
        }
    }

    return(
            <button className="output-icon" onClick={deletePlatform}>
                <i className="fa-regular fa-trash-can fa-xl"></i>
            </button>
    )
}

export default DeletePlatform;