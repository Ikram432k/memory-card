import React from "react";
import './gameBoard.css'

function GameBoard(props){
const{id,url,title} = props.obj;
return(
<div className="card" id={id} onClick={props.handleClick} >
    <img src={url} alt={title}/>
</div>
)
}
export default GameBoard;