import { Card, CardContent, Typography, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
import { useTranslation } from 'react-i18next';

interface CustomCharactersCardsProps {
  characters: CharacterDetails[];
  deleteCharacter: (id: string) => void;
}

function CustomCharactersCards({ characters, deleteCharacter }: CustomCharactersCardsProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{character.name}</Typography>
            <Typography variant="body2">
              {t('height')}: {character.height}
            </Typography>
            <Typography variant="body2">
              {t('homeWorld')}: {character.homeworld}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
              <Button
                variant="contained"
                color="info"
                onClick={() => navigate(`/custom-character/${character.id}`)}
              >
                {t('view')}
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate(`/custom-characters/edit/${character.id}`)}
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CustomCharactersCards;
