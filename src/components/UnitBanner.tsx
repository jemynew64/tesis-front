// import { Link } from 'react-router-dom';

interface UnitBannerProps {
  title: string;
  description: string;
}

const UnitBanner = ({ title, description }: UnitBannerProps) => {
  return (
    <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      {/* <Link to="/lesson">
        <button className="hidden xl:flex border-2 border-b-4 active:border-b-2 bg-white text-green-500 p-2 rounded-xl">
          Continue
        </button>
      </Link> */}
    </div>
  );
};

export default UnitBanner;
