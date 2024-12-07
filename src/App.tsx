import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importar React Router
import { Login } from './pages/Login';  // Importamos la página de Login
import Aprender from './pages/Aprender'; // Importamos la página Aprender
import Sidebar from './components/Sidebar'; // Importamos el Sidebar
import Tienda from './pages/Tienda';
import Matematicas from './pages/Matematicas';
import Leccion from './pages/Leccion';  // Importamos la página de Lección

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de Login */}
        <Route path="/" element={<Login />} /> 

        {/* Ruta de Aprender */}
        <Route path="/aprender" element={
          <div className="flex min-h-screen">
            {/* Sidebar solo se muestra en Aprender */}
            <Sidebar />
            {/* Contenido principal de Aprender */}
            <div className="flex-1 p-8 lg:pl-[256px]"> {/* Agregar padding izquierdo en pantallas grandes */}
              <Aprender />
            </div>
          </div>
        } />

        {/* Ruta de Matemáticas */}
        <Route path="/matematicas" element={
          <div className="flex min-h-screen">
            {/* Sidebar solo se muestra en Matemáticas */}
            <Sidebar />
            {/* Contenido principal de Matemáticas */}
            <div className="flex-1 p-8 lg:pl-[256px]">
              <Matematicas />
            </div>
          </div>
        } />

        {/* Ruta de Tienda */}
        <Route path="/tienda" element={
          <div className="flex min-h-screen">
            {/* Sidebar solo se muestra en Tienda */}
            <Sidebar />
            {/* Contenido principal de Tienda */}
            <div className="flex-1 p-8 lg:pl-[256px]">
              <Tienda />
            </div>
          </div>
        } />

        {/* Ruta de Leccion, sin Sidebar */}
        <Route path="/leccion/:id" element={<Leccion />} />
        </Routes>
    </Router>
  );
}

export default App;
