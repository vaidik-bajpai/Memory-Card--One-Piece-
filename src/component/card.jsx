import Tilt from "react-parallax-tilt";
import {motion} from 'framer-motion';
function Card({handleClick, character, handleFlip}){
    
    return(
        <Tilt glareEnable={true} glareColor="whitesmoke" glareMaxOpacity={0.9} glareBorderRadius="40px">
        <motion.div
            className={"flip-card Card " + character.name}
            onClick={event => handleClick(event, character)}>
            <motion.div
                className={"cardImage"}
                style={{
                    backgroundImage: `url(${character.src})`,
                }}>
            </motion.div>
        </motion.div>
        </Tilt>
    )
}

export default Card