import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar.tsx'

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
