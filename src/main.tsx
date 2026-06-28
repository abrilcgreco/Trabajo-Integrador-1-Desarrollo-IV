import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* CartProvider envuelve App: así TODA la app puede usar el carrito */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);