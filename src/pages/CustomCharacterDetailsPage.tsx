import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CharacterListing from '../components/CharacterListing.tsx';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';

function CustomCharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);

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
    <Card>
      <CardContent>
        <CharacterListing character={character} />
      </CardContent>
    </Card>
  );
}

export default CustomCharacterDetailsPage;
