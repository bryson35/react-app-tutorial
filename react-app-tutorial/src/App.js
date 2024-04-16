import logo from './logo.svg';
import './App.css';
import './buttons.js';

function App() {
  return (
    <div>
      <h1>This is my Application. Welcome!</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button>
      HOME
    </button>
  );
}



export default App;
