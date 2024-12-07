import { Link } from 'react-router-dom';
import { FaCheck, FaStar, FaLock } from 'react-icons/fa';

interface LessonButtonProps {
  id: number;
  title: string;
  isLocked: boolean;
  isCompleted: boolean;
  totalCount: number;
  index: number;
  onClick: () => void; // Agregamos la propiedad onClick aquí
}

const LessonButton = ({ id, title, isLocked, isCompleted, totalCount, index }: LessonButtonProps) => {
  const Icon = isCompleted ? FaCheck : isLocked ? FaLock : FaStar;

  // Cálculo para la posición de cada ícono, para el "camino"
  const rightPosition = (index / totalCount) * 100;

  return (
    <Link to={`/leccion/${id}`} className="relative mb-4 flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center relative"
        style={{
          marginLeft: `${rightPosition}%`, // Ajusta la posición de cada lección en el "camino"
        }}
      >
        <button
          className={`w-16 h-16 rounded-full flex items-center justify-center 
            ${isLocked ? 'bg-gray-400' : 'bg-green-500'} shadow-md`}
          disabled={isLocked}
        >
          <Icon className={`text-2xl ${isLocked ? 'text-gray-700' : 'text-white'}`} />
        </button>
        {/* Mantener el color del texto del título con texto blanco cuando no está bloqueado */}
        <p className={`mt-2 text-center text-lg ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>{title}</p>
      </div>
    </Link>
  );
};

export default LessonButton;
