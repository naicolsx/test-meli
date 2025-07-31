import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import SearchList from './pages/Search.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import Home from './pages/Home.tsx';
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