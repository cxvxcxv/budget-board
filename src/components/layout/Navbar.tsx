import { Menu } from 'lucide-react';

type TNavbarProps = {
  onMenuClick: () => void;
};

export const Navbar = ({ onMenuClick }: TNavbarProps) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-white/10 bg-gray-900/60 backdrop-blur">
      {/* mobile menu button */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-md hover:bg-white/10 lg:hidden"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div>{/* user avatar, settings, etc. */}</div>
    </header>
  );
};
