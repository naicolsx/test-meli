import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import './styles/app.scss'


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/items" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;