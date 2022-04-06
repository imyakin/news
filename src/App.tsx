import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import News from './components/News/News';
import {btns} from './data/data'

function App() { 

  return (
    <>
      <h2 className='center-align'>Read the latest news</h2>
      <div className='center-align'>
          {btns.map(btn => (
            <Button 
              key={btn.id} 
              text={btn.name} 
              url={btn.url}
            />))
          }
      </div>
      <div>
        <News/>
      </div>
    </>
  );
}

export default App;
