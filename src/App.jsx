import { BrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter basename="/blog-preview-card">
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
