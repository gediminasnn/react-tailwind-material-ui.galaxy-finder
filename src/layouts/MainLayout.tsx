import { Outlet } from 'react-router-dom';

import Navigation from '../components/Navigation.tsx';

function MainLayout() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
