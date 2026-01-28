
import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{ color: '#e2e8f0', padding: '40px', textAlign: 'center' }}>
        <p style={{ color: '#ef4444', fontSize: '18px' }}>Oops! Something went wrong.</p>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Please refresh the page or check the browser console.</p>
      </div>
    );
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Education />
          </Suspense>
        </main>
        <Footer />
        
        {/* Interactive AI Sidekick */}
        <GeminiAssistant />
      </div>
    </ErrorBoundary>
  );
};

export default App;
