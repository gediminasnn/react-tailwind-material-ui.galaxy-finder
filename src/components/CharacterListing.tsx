import { Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';

interface CharacterListingProps {
  character: CharacterDetails;
}

function CharacterListing({ character }: CharacterListingProps) {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {character.name}
      </Typography>
      <Divider className="my-2" />
      <Typography variant="body1">
        <strong>{t('height')}:</strong> {character.height}
      </Typography>
      <Typography variant="body1">
        <strong>{t('mass')}:</strong> {character.mass}
      </Typography>
      <Typography variant="body1">
        <strong>{t('hairColor')}:</strong> {character.hair_color}
      </Typography>
      <Typography variant="body1">
        <strong>{t('skinColor')}:</strong> {character.skin_color}
      </Typography>
      <Typography variant="body1">
        <strong>{t('eyeColor')}:</strong> {character.eye_color}
      </Typography>
      <Typography variant="body1">
        <strong>{t('birthYear')}:</strong> {character.birth_year}
      </Typography>
      <Typography variant="body1">
        <strong>{t('gender')}:</strong> {character.gender}
      </Typography>
      <Typography variant="body1">
        <strong>{t('homeworld')}:</strong> {character.homeworld}
      </Typography>
      <Typography variant="body1"><strong>{t('films')}:</strong></Typography>
      <ul>
        {character.films.map((film, index) => (
          <li key={index}>
            <Typography variant="body2">{film}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterListing;
