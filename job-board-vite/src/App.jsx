import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import JobDetails from './pages/JobDetails.jsx';
import Apply from './pages/Apply.jsx';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/apply/:id" element={<Apply />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>Afterhours — a job board for roles that run when the sun doesn&apos;t.</p>
          <p>Built as a technical assessment project.</p>
        </div>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="detail-title">Page not found</h1>
      <p className="hero-subtitle">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
}
