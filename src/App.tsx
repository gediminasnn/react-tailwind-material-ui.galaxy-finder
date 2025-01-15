import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import CharactersSearchPage from './pages/CharactersSearchPage.tsx';
import CharacterPage from './pages/CharacterPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import CustomCharactersPage from './pages/CustomCharactersPage.tsx';
import CustomCharacterAddPage from './pages/CustomCharacterAddPage.tsx';
import CustomCharacterEditPage from './pages/CustomCharacterEditPage.tsx';
import CharacterCopyPage from './pages/CharacterCopyPage.tsx';
import CustomCharacterPage from './pages/CustomCharacterPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<CharactersSearchPage />} />
        <Route path="character/:id" element={<CharacterPage />} />
        <Route path="character/copy" element={<CharacterCopyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="custom-characters" element={<CustomCharactersPage />} />
        <Route path="custom-character/:id" element={<CustomCharacterPage />} />
        <Route path="custom-characters/new" element={<CustomCharacterAddPage />} />
        <Route path="custom-characters/edit/:id" element={<CustomCharacterEditPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
