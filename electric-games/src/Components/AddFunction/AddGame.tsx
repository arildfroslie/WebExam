import { useLocation } from "react-router-dom";


const AddGame = () => {
    const {pathname} = useLocation();
    const header = pathname.split("/")[1];
    
    

    return(
        <>
            <section className="add-function">
                <form className="add-function-form">

                    <label>Add a {header}:</label><br/>
                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Title" 
                    /><br />

                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Platform" 
                    /><br />

                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Genre" 
                    /><br />

                    <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Rating" 
                    /><br />

                    <input 
                    className="btn" 
                    type="button" 
                    value="Submit"
                    onClick={AddGame} 
                    />  

                </form>
            </section>
        </>
    )
}

export default AddGame;