import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Cambié useHistory por useNavigate
import { UserProgress } from '../components/UserProgress';
import MissionsCard from '../components/MissionsCard';
import UnitBanner from '../components/UnitBanner';
import Header from '../components/Header';
import LessonTrack from '../components/LessonTrack';

interface Lesson {
  id: number;
  title: string;
  isLocked: boolean;
  isCompleted: boolean;
}

const Matematicas = () => {
  const [lessons] = useState<Lesson[]>([
    { id: 1, title: 'Lección 1', isLocked: false, isCompleted: false },
    { id: 2, title: 'Lección 2', isLocked: true, isCompleted: false },
    { id: 3, title: 'Lección 3', isLocked: true, isCompleted: false },
    { id: 4, title: 'Lección 4', isLocked: true, isCompleted: false },
  ]);

  const navigate = useNavigate();  // Usamos useNavigate en lugar de useHistory

  const handleLessonClick = (lessonId: number) => {
    navigate(`/leccion/${lessonId}`);  // Redirige a la página de la lección correspondiente
  };

  return (
    <div className="flex min-h-screen">
      <div className="block lg:hidden">
        <UserProgress points={500} lives={4} />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8 lg:pl-[256px]">
        <Header title="Matemáticas" />
        <UnitBanner 
          title="¡Comencemos con las Matemáticas!"
          description="Descubre el mundo de los números y aprende a sumar, restar y resolver problemas divertidos que te ayudarán a entender las matemáticas de una forma fácil y entretenida."
        />
        <div className="mt-8">
          {/* Le pasamos handleLessonClick a LessonTrack */}
          <LessonTrack lessons={lessons} onLessonClick={handleLessonClick} />
        </div>
      </div>

      {/* Barra de progreso en el lado derecho solo visible en pantallas grandes */}
      <div className="hidden lg:block w-[250px] bg-white p-4">
        <UserProgress points={500} lives={4} />
        <MissionsCard />
      </div>
    </div>
  );
};

export default Matematicas;
