// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

// Función para introducir un retraso artificial
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Cargar el componente de forma dinámica con un retraso
const App = lazy(async () => {
  await delay(1500); // Retraso de 2 segundos
  return import('./App');
});

// Componente Loader (puede ser un spinner, barra de progreso, etc.)
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader"></div>
    </div>
  );
};


// Renderizado del componente
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </StrictMode>
  </BrowserRouter>,
);

