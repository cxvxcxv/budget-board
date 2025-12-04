import { useLocation } from 'react-router-dom';
import { ROUTES_NAVBAR_CONFIG } from '../config/routes-navbar.config';

export const useNavbarConfig = () => {
  const { pathname } = useLocation();

  return (
    ROUTES_NAVBAR_CONFIG[pathname] ?? {
      title: 'Budget Board',
    }
  );
};
