import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;