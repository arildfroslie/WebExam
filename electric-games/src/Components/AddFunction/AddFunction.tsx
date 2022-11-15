import "./AddFunction.css";

const AddFunction = () => {

    return(
        <>
            <section className="add-function">
                <form className="add-function-form">
                    <label>Add a Game:</label><br/>
                    <input className="text-input" type="text" placeholder="Title" /><br />
                    <input className="text-input" type="text" placeholder="Platform" /><br />
                    <input className="text-input" type="text" placeholder="Genre" /><br />
                    <input className="text-input" type="text" placeholder="Rating" /><br />
                    <input className="btn" type="button" value="Submit" />  
                </form>
            </section>
        </>
    )
}

export default AddFunction;