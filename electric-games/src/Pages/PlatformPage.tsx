import PlatformList from "../components/Platform/PlatformList";
import SearchFunction from "../components/SearchFunction/SearchFunction";
import Header from "../components/Header/Header";
import AddPlatform from "../components/AddFunction/AddPlatform";
import UpdatePlatform from "../components/UpdateFunction/UpdatePlatform";

const PlatformPage = () => {
    return(
        <>
            <Header />
            <PlatformList />
            <div className="add-update-container">
                <AddPlatform />
                <UpdatePlatform />
            </div>
        </>
    )
}

export default PlatformPage;