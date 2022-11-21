const ScrollToUpdate = () => {
    const alertMessage = () => {
        alert("you clicked");
    }

    return(
    <button className="icon" onClick={alertMessage}>
                <i className="fa-regular fa-pen-to-square fa-xl"></i>
    </button>
    )
};

export default ScrollToUpdate;