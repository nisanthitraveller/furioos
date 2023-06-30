import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
//createRoot(rootElement).render(<App />);

createRoot(rootElement).render(
    <React.Suspense fallback={<div>Loading...</div>}>
        <App />
    </React.Suspense>
);
