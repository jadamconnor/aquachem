import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SHSDSDownloads from './pages/SDSDownloads';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sds-downloads" element={<SHSDSDownloads />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
