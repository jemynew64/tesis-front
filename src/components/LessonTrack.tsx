import React from 'react';
import LessonButton from './LessonButton';

interface Lesson {
  id: number;
  title: string;
  isLocked: boolean;
  isCompleted: boolean;
}

interface LessonTrackProps {
  lessons: Lesson[];
  onLessonClick: (lessonId: number) => void; // Agregamos la propiedad onLessonClick aquí
}

const LessonTrack: React.FC<LessonTrackProps> = ({ lessons, onLessonClick }) => {
  return (
    <div className="flex justify-center items-start w-full py-16 relative">
      {/* Línea de camino visual */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-300"></div>

      {/* Contenedor de las lecciones */}
      <div className="flex flex-col items-center gap-8 w-full">
        {lessons.map((lesson, index) => {
          let transformStyle = '';

          // Variar la posición y rotación para hacer el camino más interesante
          if (index < 3) {
            transformStyle = `translateY(${index * 10}px) rotate(${index * 5}deg)`;  // Desplazamiento hacia abajo y rotación
          } else if (index >= 3 && index < 6) {
            transformStyle = `translateY(${index * 20}px) translateX(20px) rotate(${index * -2}deg) scale(1.1)`; // Transición hacia la derecha con rotación y escalado
          } else {
            transformStyle = `translateY(${index * 20}px) translateX(40px) rotate(${index * -5}deg) scale(1.2)`;  // Más curvado y con escalado
          }

          return (
            <div
              key={lesson.id}
              className="relative mb-4"
              style={{
                transform: transformStyle,
                transition: 'transform 0.3s ease', // Transición suave para las transformaciones
              }}
            >
              <LessonButton
                id={lesson.id}
                title={lesson.title}
                isLocked={lesson.isLocked}
                isCompleted={lesson.isCompleted}
                totalCount={lessons.length}
                index={index}
                onClick={() => onLessonClick(lesson.id)} // Usamos onLessonClick aquí
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonTrack;
