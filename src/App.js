import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './index.css';

// Lazy Load Components
const Home = lazy(() => import('./home'));
const Student = lazy(() => import('./student'));
const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));

// Loading Fallback
const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-gradient)',
    color: 'var(--primary)'
  }}>
    <div className="animate-fade-in" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
      Loading MatchIntern...
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student" element={<Student />} />
          <Route path="/company" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
