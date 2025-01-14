import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import CharactersPage from './pages/CharactersPage.tsx'
import CharacterDetailsPage from './pages/CharacterDetailsPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<CharactersPage />} />
        <Route path="character/:id" element={<CharacterDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
