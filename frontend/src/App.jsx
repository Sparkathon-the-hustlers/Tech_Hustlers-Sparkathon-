import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Signin from './pages/Signin';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <h1>Hello, React!</h1>
            <p>This is a clean slate React project.</p>
          </div>
        } />

        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
