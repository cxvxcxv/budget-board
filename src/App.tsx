import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
