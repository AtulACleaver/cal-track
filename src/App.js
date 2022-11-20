import Navbar from './components/Navbar.jsx';
import './css/main.css'
import Pomodoro from './components/Pomodoro.jsx';
import Todolist from './components/Todolist.jsx';
import Footer from './components/Footer.jsx';
import Music from './components/Music.jsx';

function App() {
  return (
    <div className="App">
      {/* 
      ✅ Navbar
        - Logo
        - Heading
      ✅ Background Animation
      Pomodoro Timer
        ✅ Timer
        ✅ Start/Stop Button
        ✅ Focus/Short Break/Long Break Buttons
      ✅ Tips
        ✅ Tip 1 for Focus
        ✅ Tip 2 for Short Break
        ✅ Tip 3 for Long Break
      Todo List
        - Connect with Google Calendar
        ✅ Task List
        ✅ Add Task Button
        ✅ Delete Task Button
      ✅ Footer
        - Github Link
        - LinkedIn Link
        - Email Link
        - Twitter Link
        - Instagram Link
        - Website Link
      ✅ Music Controls
        Music Radio
          - Nature Sounds
          - Lofi Music
        Music Controls
          - Mute/Unmute Button
          - Volume Slider
      */}
      <Navbar />
      <Music />
      <Pomodoro />
      <Todolist />
      <Footer />
    </div>
  );
}

export default App;
