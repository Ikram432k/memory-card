import Header from "./components/Header/header";
import GameBoard from './components/GameBoard/gameBoard';
import data from './components/assets/data';
import { useEffect, useState } from "react";
function App() {
  const [dataArr,setDataArr] = useState([...data]);
  const [selected,setSelected] = useState([]);
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [prevScore,setPrevScore] = useState(0);
  
  const shuffleArray = () => {
    let temp = dataArr;
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
  };
  //when score get updated shuffle the array
  useEffect(() => {
    setDataArr([...shuffleArray()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);
  const handleClick =(e) =>{
    if(selected.indexOf(e.target.id)!==-1){
      if(selected.length>prevScore){
        setBestScore(selected.length);
        setPrevScore(selected.length);
      }
      setSelected([])
      setScore(0)
      return
    }
    else{
      let temp = selected
      temp.push(e.target.id)
      setSelected([...temp])
    setScore(selected.length)

  }

}

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <div className="gameBoard">
      {dataArr.map((obj,i)=>(
        <GameBoard obj={obj} handleClick={handleClick} key={i}/>
      ))}
    </div>
    </div>
  );
}

export default App;
