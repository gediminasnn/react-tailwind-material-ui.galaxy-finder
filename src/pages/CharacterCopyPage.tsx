import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
import CustomCharacterForm from '../components/CustomCharacterForm.tsx';

function CharacterCopyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const character = location.state?.character as CharacterDetails;

  const onSubmit = async (data: CharacterDetails) => {
    try {
      await fetch('http://localhost:5000/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      navigate('/custom-characters');
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Copy Character
        </Typography>
        <CustomCharacterForm character={character} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}

export default CharacterCopyPage;
