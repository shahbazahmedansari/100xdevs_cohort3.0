import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App3 from './App3';
// import App from './App.jsx';
// import App2 from './App2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </StrictMode>,
);
