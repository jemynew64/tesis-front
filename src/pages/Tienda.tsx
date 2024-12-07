import { UserProgress } from '../components/UserProgress'; // Componente de progreso del usuario
import MissionsCard from '../components/MissionsCard'; // Importar el nuevo componente de misiones
import { FaHeart } from 'react-icons/fa'; // Icono del corazón, de react-icons

const Tienda = () => {
  return (
    <div className="flex min-h-screen">
      {/* Contenido principal (en el centro) */}
      <div className="block lg:hidden">
        <UserProgress points={500} lives={4} />
      </div>

      <div className="flex-1 p-8 lg:pl-[256px]">
        {/* Icono de la tienda */}
        <div className="text-center">
          <img 
            src="/shop.svg" 
            alt="Icono Tienda" 
            className="mx-auto w-32 h-32 mb-4" // Tamaño del icono (ajústalo a tu gusto)
          />
          <h1 className="text-2xl font-semibold mb-6">Canje de puntos</h1>
        </div>

        {/* Oferta de "Recargar vidas" */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Icono de Corazón */}
            <FaHeart className="text-red-500 w-6 h-6" />
            <span className="text-lg font-semibold">Recargar Vidas</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Puntos: 50</span>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Recargar Vida
          </button>
        </div>
      </div>

      {/* Barra de progreso (a la derecha) */}
      <div className="hidden lg:block w-[250px] bg-white p-4">
        <UserProgress points={500} lives={4} />
        <MissionsCard />
      </div>
    </div>
  );
};

export default Tienda;
