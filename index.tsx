
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Could not find root element to mount to");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to mount React app:", error);
  rootElement.innerHTML = '<div style="color: #ef4444; padding: 20px; font-family: monospace;">Error mounting app. Check console for details.</div>';
}
