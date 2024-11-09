import { UserProgress } from '../components/UserProgress'; // Componente de progreso del usuario
import MissionsCard from '../components/MissionsCard'; // Importar el nuevo componente de misiones

const Tienda = () => {
  return (
    <div className="flex min-h-screen">
      {/* Contenido principal (en el centro) */}
      <div className="flex-1 p-8 lg:pl-[256px]">
    
    </div>
      {/* Barra de progreso (a la derecha) */}
      <div className="hidden lg:block w-[250px] bg-white p-4">
        <UserProgress points={500} lives={4} />
        {/* Agregar la tarjeta de misiones debajo */}
        <MissionsCard />
      </div>
    </div>
  );
};

export default Tienda;
