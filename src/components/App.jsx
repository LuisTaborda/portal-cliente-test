import './App.css';

import Card from './Card'

function App() {
  const numItems = 8;

  const elements = [];

  for (let i = 1; i <= numItems; i++) {
    elements.push(
      <Card key={i} className="card-app" name={i} description="Este card é um teste no react" ></Card>
    );
  }

  return (
    <div className='master'>
      <div className='navbar'></div>
      <div className='body'>{elements}</div>
      <div className='footer'></div>
    </div>
  );
}

export default App;