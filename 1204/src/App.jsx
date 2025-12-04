import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(8);

  useEffect(() => {
    const upButton = document.querySelector('.up');
    const downButton = document.querySelector('.down');

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    upButton.addEventListener('click', increment);
    downButton.addEventListener('click', decrement);

    return () => {
      upButton.removeEventListener('click', increment);
      downButton.removeEventListener('click', decrement);
    };
  }, []);

  return (
    <>
      <h1>Egyszerű számláló</h1>
      <div id="kezeloPanel">
        <button className='up'>+</button>
        <p>{count}</p>
        <button className='down'>-</button>
      </div>
    </>
  )
}

export default App
