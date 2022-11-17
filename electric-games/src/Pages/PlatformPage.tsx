import PlatformList from "../components/Platform/PlatformList";
import SearchFunction from "../components/SearchFunction/SearchFunction";
import Header from "../components/Header/Header";

const PlatformPage = () => {
    return(
        <>
            <Header />
            <SearchFunction />
            <PlatformList />
        </>
    )
}

export default PlatformPage;