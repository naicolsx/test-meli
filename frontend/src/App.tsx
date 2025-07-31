import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchList from './pages/Search';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import './styles/app.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchList />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;