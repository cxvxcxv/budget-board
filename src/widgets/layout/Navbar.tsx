import { Menu } from 'lucide-react';
import { useNavbarConfig } from '@/shared/hooks';

type TNavbarProps = {
  onMenuClick: () => void;
};

export const Navbar = ({ onMenuClick }: TNavbarProps) => {
  const { title } = useNavbarConfig();

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-gray-900/60 p-4 lg:hidden">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-white/10 lg:hidden"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>

        <p className="font-semibold">{title}</p>
      </div>
    </header>
  );
};
