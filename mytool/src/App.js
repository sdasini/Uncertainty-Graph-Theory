import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <form>
      <input type='file' placeholder='Upload file' />
      <Link to = "/Graph">Upload</Link>
      </form>
      </header>
    </div>
  );
}

export default App;
