import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import CharactersSearchPage from './pages/CharactersSearchPage.tsx'
import CharacterDetailsPage from './pages/CharacterDetailsPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import CustomCharactersPage from './pages/CustomCharactersPage.tsx';
import UpsertCustomCharacterPage from './pages/UpsertCustomCharacterPage.tsx';
import CustomCharacterDetailsPage from './pages/CustomCharacterDetailsPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<CharactersSearchPage />} />
        <Route path="character/:id" element={<CharacterDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="custom-characters" element={<CustomCharactersPage />} />
        <Route
          path="edit-character/:id"
          element={<UpsertCustomCharacterPage />}
        />
        <Route path="custom-character/:id" element={<CustomCharacterDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
