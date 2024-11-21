import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Note from './Components/NoteHome/Note.Jsx';
import Signup from './Components/Login/signup';
import LoginPage from './Components/Login/loginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
