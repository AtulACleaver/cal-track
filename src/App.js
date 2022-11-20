import Navbar from './components/Navbar.jsx';
import './css/main.css'
import Pomodoro from './components/Pomodoro.jsx';
import Todolist from './components/Todolist.jsx';
import Footer from './components/Footer.jsx';
import Music from './components/Music.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Music />
      <Pomodoro />
      <Todolist />
      <Footer />
    </div>
  );
}

export default App;
