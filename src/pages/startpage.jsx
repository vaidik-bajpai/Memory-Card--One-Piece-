import "/src/styles/startPage.css";
function StartPage({
    setStart ,
    setDifficulty
}){
    function handleDifficulty(e){
        console.log()
        if(e.currentTarget.classList[0] === "easy"){
            setDifficulty([8,4])
        }
        else if(e.currentTarget.classList[0] === "medium"){
            setDifficulty([8,4])
        }
        else{
            setDifficulty([8,4])
        }
        setStart(true)
    }
    return(
        <div className="startPage">
            <img src="./src/assets/One_Piece_Logo.png" alt="logo" width="400px" height="150px"
            />
            <h1 className="gameTitle">Memory G<span>a</span>me</h1>
            <div className="difficulty">
                <button className="easy diff" onClick={handleDifficulty}>Easy</button>
                <button className="medium diff" onClick={handleDifficulty}>Medium</button>
                <button className="hard diff" onClick={handleDifficulty}>Hard</button>
            </div>
        </div>
    )
}

export default StartPage