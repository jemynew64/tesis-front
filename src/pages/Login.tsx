import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate para la redirección
import Image from '../components/Image';  // Asegúrate de que la ruta esté correcta

export const Login = () => {
  const [email, setEmail] = useState('');  // Estado para el nombre de usuario
  const [password, setPassword] = useState('');  // Estado para la contraseña
  const navigate = useNavigate();  // Instancia de useNavigate para redirigir

  // Función para manejar el login
  const handleLogin = () => {
    // Verificar si el usuario y la contraseña son correctos (hardcodeado)
    if (email === 'neythay1234' && password === '123456') {
      navigate("/aprender");  // Si es correcto, redirigir a la página de Aprender
    } else {
      alert("Credenciales incorrectas");  // Si es incorrecto, mostrar alerta
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-white">
      <div className="bg-white dark:bg-white rounded-lg px-8 py-6 max-w-md sm:px-12 sm:py-8 w-full">

        {/* Usando el componente Image */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/images/iconodemarca.jpg" // Ruta de la imagen
            alt="Logo"
            width="w-64 sm:w-64" // Tamaño de la imagen responsivo
            height="h-64 sm:h-64"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-4 dark:text-custom-negro">Ingresar</h1>

        <form onSubmit={(e) => e.preventDefault()}> {/* Prevents page reload on form submit */}
          <div className="mb-4">
            <input
              type="text"  // Cambié el tipo a "text" ya que estamos usando un nombre de usuario (email en este caso)
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-custom-botones-input text-black text-center"
              placeholder="Ingresar tu nombre de usuario"
              value={email} // Vinculamos el valor con el estado
              onChange={(e) => setEmail(e.target.value)}  // Actualiza el estado con el input
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-custom-botones-input text-black text-center"
              placeholder="Ingresar su contraseña"
              value={password}  // Vinculamos el valor con el estado
              onChange={(e) => setPassword(e.target.value)}  // Actualiza el estado con el input
              required
            />
          </div>

          <button
            type="button"
            onClick={handleLogin} // Llama a la función handleLogin cuando se hace clic
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-custom-purple hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
