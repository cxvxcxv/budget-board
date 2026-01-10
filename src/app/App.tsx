import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useInitCategories } from '@/shared/hooks';
import { Layout } from '@/widgets';

const Dashboard = lazy(() =>
  import('@/pages/dashboard').then(module => ({ default: module.Dashboard })),
);
const Transactions = lazy(() =>
  import('@/pages/transactions').then(module => ({
    default: module.Transactions,
  })),
);
const Categories = lazy(() =>
  import('@/pages/categories').then(module => ({ default: module.Categories })),
);
const Settings = lazy(() =>
  import('@/pages/settings').then(module => ({ default: module.Settings })),
);

export const App = () => {
  useInitCategories();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
};
