import { useState } from 'react';
import './App.css';
import apples from './assets/apples.svg';
import rightArrow from './assets/right-arrow.svg';
import leftArrow from './assets/left-arrow.svg';

function App() {
  const [leftApples, setLeftApples] = useState(10);
  const [rightApples, setRightApples] = useState(0);

  const addValue = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };

  const decreaseValue = () => {
    if (rightApples > 0) {
      setLeftApples(leftApples + 1);
      setRightApples(rightApples - 1);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <img src={apples} alt="Apples" />
        <h2>Apples {leftApples}</h2>
        <p>Basket 1</p>
      </div>
      <div className="btns">
        {/* Button 1 */}
        <img src={leftArrow} alt="Left Arrow" className="btn" onClick={decreaseValue} />

        {/* Button 2 */}
        <img src={rightArrow} alt="Right Arrow" className="btn" onClick={addValue} /> 
      </div>
      <div className="box">
        <img src={apples} alt="Apples" />
        <h2>Apples {rightApples}</h2>
        <p>Basket 2</p>
      </div>
    </div>
  );
}
export default App;