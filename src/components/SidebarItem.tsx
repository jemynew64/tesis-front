import { Link, useLocation } from "react-router-dom"; // Importamos useLocation para detectar la ruta actual

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  to: string;
}

const SidebarItem = ({ label, iconSrc, to }: SidebarItemProps) => {
  const location = useLocation(); // Obtener la ruta actual
  const isActive = location.pathname === to; // Verificar si el elemento está activo

  return (
    <Link
      to={to}
      className={`flex items-center p-4 rounded-lg ${
        isActive ? 'bg-indigo-700 text-green-500' : 'text-white'
      } hover:text-green-500 transition-colors duration-300`}
    >
      <img src={iconSrc} alt={label} className="mr-5" height={32} width={32} />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
