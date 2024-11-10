import { UserProgress } from '../components/UserProgress';
import MissionsCard from '../components/MissionsCard';
import UnitBanner from '../components/UnitBanner';
import Header from '../components/Header';
import LessonTrack from '../components/LessonTrack';  // Importa correctamente el componente

interface Lesson {
  id: number;
  title: string;
  isLocked: boolean;
  isCompleted: boolean;
}

const Matematicas = () => {
  const lessons: Lesson[] = [
    { id: 1, title: 'Lección 1', isLocked: false, isCompleted: false },
    { id: 2, title: 'Lección 2', isLocked: true, isCompleted: false },
    { id: 3, title: 'Lección 3', isLocked: true, isCompleted: false },
    { id: 4, title: 'Lección 4', isLocked: true, isCompleted: false },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="block lg:hidden">
        <UserProgress points={500} lives={4} />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8 lg:pl-[256px]">
        <Header title="Matemáticas" />
        <UnitBanner 
          title="Unidad de Matemáticas"
          description="Aprende sobre operaciones matemáticas, números y más."
        />
        <div className="mt-8">
          {/* Usa LessonTrack en lugar de mapear los botones de lección */}
          <LessonTrack lessons={lessons} />
        </div>
        <Header title="Matemáticas" />
        <UnitBanner 
          title="Unidad de Matemáticas"
          description="Aprende sobre operaciones matemáticas, números y más."
        />
        <div className="mt-8">
          {/* Usa LessonTrack en lugar de mapear los botones de lección */}
          <LessonTrack lessons={lessons} />
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
