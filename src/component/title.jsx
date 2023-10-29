function Title(){
    return(
        <div
            className="Title"
            style={{
                height: "125px",
                marginBottom: "30px",
            }}>
            <img src="./src/assets/One_Piece_Logo.png" alt="logo" 
            />
            <div
                className="score"
                style={{
                    padding: "0px 20px"
                }}>
                <div className="currentScore">Score: 0</div>
                <div className="bestScore">Best Score: 0</div>
            </div>
        </div>
    )
}

export default Title