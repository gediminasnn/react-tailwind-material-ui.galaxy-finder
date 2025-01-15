import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
import CustomCharacterForm from '../components/CustomCharacterForm.tsx';

function CustomCharacterAddPage() {
  const navigate = useNavigate();

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
          Add New Character
        </Typography>
        <CustomCharacterForm onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}

export default CustomCharacterAddPage;
