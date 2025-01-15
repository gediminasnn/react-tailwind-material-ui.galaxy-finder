import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CircularProgress,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  Box,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';

function CustomCharactersPage() {
  const [characters, setCharacters] = useState<CharacterDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { t } = useTranslation();

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
          onClick={() => navigate('/edit-character/new')}
        >
          {t('addNewCharacter')}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('height')}</TableCell>
              <TableCell>{t('homeWorld')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((character) => (
              <TableRow key={character.id}>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.homeworld}</TableCell>
                <TableCell>{character.height}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => navigate(`/custom-character/${character.id}`)}
                    >
                      {t('view')}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/edit-character/${character.id}`)}
                    >
                      {t('edit')}
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteCharacter(character.id!)}
                    >
                      {t('delete')}
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomCharactersPage;
