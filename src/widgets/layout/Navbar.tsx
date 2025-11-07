import { Menu } from 'lucide-react';

type TNavbarProps = {
  onMenuClick: () => void;
};

export const Navbar = ({ onMenuClick }: TNavbarProps) => {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-gray-900/60 p-4 backdrop-blur lg:hidden">
      {/* mobile menu button */}
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 hover:bg-white/10 lg:hidden"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>
    </header>
  );
};
