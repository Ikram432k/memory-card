import React from "react";
import './gameBoard.css'

function GameBoard(props){
const{id,url,title} = props.obj;
return(
<div className="card"  >
    <img src={url} alt={title} id={id} onClick={props.handleClick}/>
    <p>{title}</p>
</div>
)
}
export default GameBoard;