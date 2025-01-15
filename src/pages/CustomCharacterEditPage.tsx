import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
import CustomCharacterForm from '../components/CustomCharacterForm.tsx';

function CustomCharacterEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`http://localhost:5000/characters/${id}`);
        const data: CharacterDetails = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const onSubmit = async (data: CharacterDetails) => {
    try {
      await fetch(`http://localhost:5000/characters/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      navigate('/custom-characters');
    } catch (error) {
      console.error('Error updating character:', error);
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Edit Character
        </Typography>
        {character && <CustomCharacterForm character={character} onSubmit={onSubmit} />}
      </CardContent>
    </Card>
  );
}

export default CustomCharacterEditPage;
