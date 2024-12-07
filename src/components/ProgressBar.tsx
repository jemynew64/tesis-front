import * as Progress from "@radix-ui/react-progress";

// Definimos el tipo para las props del componente
interface ProgressBarProps {
  value: number; // Establecemos que 'value' es un número
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => (
  <Progress.Root className="relative w-full h-4 bg-gray-200 rounded-full ">
    <Progress.Indicator
      className="bg-custom-purple  h-full rounded-full transition-transform"
      style={{ width: `${value}%` }}
    />
  </Progress.Root>
);

export default ProgressBar;
