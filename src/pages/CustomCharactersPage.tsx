import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Button, Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
import CustomCharactersCards from '../components/CustomCharactersCards.tsx';
import CustomCharactersTable from '../components/CustomCharactersTable.tsx';

function CustomCharactersPage() {
  const [characters, setCharacters] = useState<CharacterDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch('http://localhost:5000/characters');
        const data: CharacterDetails[] = await res.json();
        setCharacters(data);
      } catch (error) {
        console.error(t('fetchError'), error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [t]);

  const deleteCharacter = async (id: string) => {
    if (!window.confirm(t('deleteConfirmation'))) return;
    await fetch(`http://localhost:5000/characters/${id}`, { method: 'DELETE' });
    setCharacters(characters.filter((character) => character.id !== id));
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: 0 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/custom-characters/new')}
        >
          {t('addNewCharacter')}
        </Button>
      </Box>
      {isMobile ? (
        <CustomCharactersCards characters={characters} deleteCharacter={deleteCharacter} />
      ) : (
        <CustomCharactersTable characters={characters} deleteCharacter={deleteCharacter} />
      )}
    </Box>
  );
}

export default CustomCharactersPage;
