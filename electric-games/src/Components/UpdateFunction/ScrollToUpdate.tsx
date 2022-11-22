
const ScrollToUpdate = () => {
    const alertMessage = () => {
        alert("You clicked id: ");
    }

    return(
    <button className="icon" onClick={alertMessage}>
                <i className="fa-regular fa-pen-to-square fa-xl"></i>
    </button>
    )
};

export default ScrollToUpdate;