import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Nav />
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
