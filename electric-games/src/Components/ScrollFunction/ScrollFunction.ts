const scrollFunction = (id : string) => {
    const scrollToElement = document.getElementById(id);
    if (scrollToElement) {
        scrollToElement.scrollIntoView();
    }

}

export default scrollFunction;