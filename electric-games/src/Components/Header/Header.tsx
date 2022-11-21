import { useLocation } from "react-router-dom";

const Header = () => {
    const {pathname} = useLocation();
    const header = pathname.split("/")[1];

    return (
    <section className="header">
        <h1 className="header-title">{header}</h1>
    </section>
    )
};

export default Header;