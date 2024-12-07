import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import { ExitModal } from '../components/modals/exit-modal';  // Modal de salida
import { useExitModal } from '../store/use-exit-modal';  // Estado para abrir el modal
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import { FaHeart } from 'react-icons/fa';  // Importamos un icono de corazón para representar vidas

const Leccion = () => {
  const navigate = useNavigate();  // Crear instancia de navigate
  const { id } = useParams<{ id: string }>();  
  const { open } = useExitModal(); 

  // Estados de las preguntas y demás
  const [questions] = useState([
    { id: 1, question: "¿Cuánto es 2 + 2?", options: [3, 5, 4], correctAnswer: 4 },
    { id: 2, question: "¿Cuánto es 5 + 3?", options: [7, 9, 8], correctAnswer: 8 },
    { id: 3, question: "¿Cuánto es 3 + 6?", options: [8, 10, 9], correctAnswer: 9 },
    { id: 4, question: "¿Cuánto es 7 - 2?", options: [4, 6, 5], correctAnswer: 5 },
    { id: 5, question: "¿Cuánto es 8 x 3?", options: [22, 26, 24], correctAnswer: 24 },
    { id: 6, question: "¿Cuánto es 9 ÷ 3?", options: [2, 4, 3], correctAnswer: 3 },
    { id: 7, question: "¿Cuánto es 6 + 5?", options: [13, 12, 11], correctAnswer: 11 },
    { id: 8, question: "¿Cuánto es 15 - 7?", options: [7, 9, 8], correctAnswer: 8 }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lives, setLives] = useState(5);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null); 

  const handleAnswer = (selectedAnswer: number) => {
    setAnswerSelected(selectedAnswer);
  };

  const handleCheckAnswer = () => {
    if (answerSelected === null) return; 
    if (answerSelected === questions[currentQuestion].correctAnswer) {
      setAnsweredQuestions(prev => prev + 1);
    } else {
      setLives(prev => prev - 1);
    }

    if (answeredQuestions + 1 === questions.length || lives === 0) {
      setIsCompleted(true);
      setTimeout(() => navigate('/matematicas'), 2000); // Redirige después de 2 segundos
    } else {
      setCurrentQuestion(prev => prev + 1);
      setAnswerSelected(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg w-full h-full">
      {/* Título de la lección */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Lección {id}</h1>

      {/* Barra de progreso y Vidas */}
      <div className="flex items-center w-full mb-4">
        <div className="w-full">
          <ProgressBar value={(answeredQuestions / questions.length) * 100} />
        </div>
        <div className="flex items-center ml-4">
          <FaHeart className="text-red-500 mr-2" />
          <span className="text-lg">{lives} Vidas restantes</span>
        </div>
      </div>

      {/* Pregunta */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-md">
        <p className="text-2xl font-semibold">{questions[currentQuestion].question}</p>
      </div>

      {/* Opciones */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {questions[currentQuestion].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className={`w-full py-3 text-lg rounded-md transition ${answerSelected === option ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          onClick={open}
          className="px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
        >
          Salir
        </button>

        <button
          onClick={handleCheckAnswer}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          {answeredQuestions + 1 === questions.length || lives === 0 ? 'Finalizar' : 'Comprobar'}
        </button>
      </div>

      {/* Mensaje de finalización */}
      {isCompleted && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold text-green-600">¡Felicidades, lección completada!</h2>
          <p className="text-lg">Has completado todas las preguntas. ¡Excelente trabajo!</p>
        </div>
      )}

      {/* Modal de salida */}
      <ExitModal />
    </div>
  );
};

export default Leccion;
