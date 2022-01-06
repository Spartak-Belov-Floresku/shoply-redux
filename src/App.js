import './App.css';
import NavBar from './nav/NavBar';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
