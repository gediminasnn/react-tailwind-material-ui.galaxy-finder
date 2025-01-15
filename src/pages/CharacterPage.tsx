import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardContent, Stack, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CharacterListing from '../components/CharacterListing.tsx';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import ErrorMessage from '../components/ErrorMessage.tsx';

function CharacterPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/people/${id}/`);
        const data: CharacterDetails & { detail?: string } = await res.json();

        if (data.detail === 'Not found') {
          setCharacter(null);
          return;
        }

        const homeworldName = data.homeworld
          ? (await (await fetch(data.homeworld)).json()).name
          : '';

        const filmTitles = data.films && data.films.length > 0
          ? await Promise.all(
              data.films.map((filmUrl) => fetch(filmUrl).then((r) => r.json()))
            ).then((films) => films.map((film) => film.title))
          : [];

        setCharacter({
          ...data,
          homeworld: homeworldName,
          films: filmTitles,
        });
      } catch (error) {
        console.error('Error fetching character:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!character) return <ErrorMessage message={t('"characterNotFound')} />;

  const handleCopyCharacter = () => {
    navigate('/character/copy', { state: { character } });
  };

  return (
    <Box sx={{ padding: 0 }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ marginBottom: 2 }}
        justifyContent="flex-start"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleCopyCharacter}
        >
          {t('copyCharacterButtonLabel')}
        </Button>
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

export default CharacterPage;
