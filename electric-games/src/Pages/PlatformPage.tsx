import PlatformList from "../components/Platform/PlatformList";
import SearchFunction from "../components/SearchFunction/SearchFunction";

const PlatformPage = () => {
    return(
        <>
            <section className="header">
                <h1 className="header-title">Platforms</h1>
                <SearchFunction />
            </section>
            <PlatformList />
        </>
    )
}

export default PlatformPage;