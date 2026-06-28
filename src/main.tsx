import { StrictMode } from 'react' /*Importa el componente StrictMode de React, que es una herramienta de desarrollo que ayuda a identificar problemas potenciales en la aplicación al activar advertencias adicionales y verificaciones de seguridad durante el desarrollo, mejorando así la calidad del código y la experiencia del desarrollador al detectar posibles errores o prácticas no recomendadas en la aplicación.*/
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
