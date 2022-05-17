import React from "react";
function GameBoard(props){
const{id,url,title} = props.obj;
return(
<div className={title} id={id} onClick={props.handleClick}>
    <img src={url} alt={title}/>
</div>
)
}
export default GameBoard;