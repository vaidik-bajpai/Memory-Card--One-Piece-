function Card({character}){
    function markClicked(){

    }
    return(
        <div
            className="Card">
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url("./src/assets/${character}.jpg")`,
                    backgroundSize: "100%"
                }}
                onClick={markClicked}>
            </div>
            {/* <h3>{character}</h3> */}
        </div>
    )
}

export default Card