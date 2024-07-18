import './App.css';

import Card from './Card'

function App() {
  const numItems = 9;

  const elements = [];

  for (let i = 1; i <= numItems; i++) {
    elements.push(
      <Card key={i} className="card-app" name={i} description="Este card é um teste no react" ></Card>
    );
  }

  return (
    <div className='master'>
      <div className='navbar'></div>
      <div className='body'>
        <h1>Itens components</h1>
        <div className="body-itens">
          {elements}
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;