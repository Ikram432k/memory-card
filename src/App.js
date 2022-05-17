import Header from "./components/Header/header";
import GameBoard from './components/GameBoard/gameBoard';
import data from './components/assets/data';
import { useState } from "react";
function App() {
  const [dataArr,setDateArr] = useState([...data]);
  const [selected,setSelected] = useState([]);
  
  const handleClick =(e) =>{
    setSelected([...selected,e.target.id])
    console.log(selected)
  }
  return (
    <div className="App">
      <Header />
      <div className="gameBoard">
      {dataArr.map((obj,i)=>(
        <GameBoard obj={obj} key={i} handleClick={handleClick}/>
      ))}
    </div>
    </div>
  );
}

export default App;
