import PlatformList from "../components/Platform/PlatformList";
import SearchFunction from "../components/SearchFunction/SearchFunction";
import AddFunction from "../components/AddFunction/AddFunction";
import Header from "../components/Header/Header";

const PlatformPage = () => {
    return(
        <>
            <Header />
            <SearchFunction />
            <PlatformList />
            <AddFunction />
        </>
    )
}

export default PlatformPage;