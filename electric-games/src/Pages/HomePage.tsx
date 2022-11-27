const HomePage = () => {


    return (
        <>  
            <h1 className="header-title ">
                Welcome to Electric Games
            </h1>
            <div className="video-container">
            <iframe 
            className="video"
            src="https://www.youtube.com/embed/-wKmbb075Z4?start=8&autoplay=1&mute=1&loop=1&rel=0&controls=0&modestbrandin=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            </div>

            <div className="container">
                <div className="container-text">
                    <p>
                    We love video games, and hopefully you do as well.<br/> In our database we have a few selected titles (that we love!), but there is alot of games we've forgotten to add, so feel free to add your favorite games as well in our "Games" tab.<br/> 
                    We've given you all the tools you need to add your favorite games into the Electric Games library.<br/> You can search for your favorite games, characters, or platforms, and if you can't find it you can just add it yourself.<br/> Don't forget to add a nice picture as well
                    </p>
                </div>
                <div className="container-img">
                    <img className="img" src="/images/mario.png" alt="Mario" />
                </div>
            </div>
        </>
    )
}

export default HomePage;