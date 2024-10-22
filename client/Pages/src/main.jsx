import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

// Función para introducir un retraso artificial
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Cargar el componente de forma dinámica con un retraso
const App = lazy(async () => {
  await delay(2500); // Ajusta el retraso si es necesario
  return import('./App');
});

// Componente Loader (puede ser un spinner.)
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="loader relative w-[15px] aspect-square"></div>
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
  </BrowserRouter>
);
