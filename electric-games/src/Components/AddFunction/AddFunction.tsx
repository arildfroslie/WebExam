import IGame from "../../interfaces/IGame";
import "./AddFunction.css";
import { useLocation } from "react-router-dom";
import { ChangeEvent, useState, useContext } from "react";


const AddFunction = () => {
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
                    />  

                </form>
            </section>
        </>
    )
}

export default AddFunction;