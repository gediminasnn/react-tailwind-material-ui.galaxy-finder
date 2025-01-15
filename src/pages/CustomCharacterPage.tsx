import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress, Card, CardContent, Typography, Box, Stack, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CharacterListing from '../components/CharacterListing.tsx';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';

function CustomCharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`http://localhost:5000/characters/${id}`);
        const data: CharacterDetails & { films?: string } = await res.json();

        const updatedCharacter: CharacterDetails = {
          ...data,
          films: typeof data.films === 'string' ? data.films.split(',').map((film) => film.trim()) : data.films,
        };

        setCharacter(updatedCharacter);
      } catch (error) {
        console.error('Error fetching custom character:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!character) {
    return (
      <Typography variant="h5" color="error">
        {t('characterNotFound')}
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 0 }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ marginBottom: 2 }}
        justifyContent="flex-start"
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate(-1)}
        >
          {t('cancelButtonLabel')}
        </Button>
      </Stack>
      <Card>
        <CardContent>
          <CharacterListing character={character} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default CustomCharacterPage;
