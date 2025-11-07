import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Transactions } from '@/pages';
import { Layout } from '@/widgets/layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions">
            <Route index element={<Transactions />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
