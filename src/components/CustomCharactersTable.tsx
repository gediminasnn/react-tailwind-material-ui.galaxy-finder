import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
    Button,
  } from '@mui/material';
  import { useNavigate } from 'react-router-dom';
  import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';
  import { useTranslation } from 'react-i18next';
  
  interface CustomCharactersTableProps {
    characters: CharacterDetails[];
    deleteCharacter: (id: string) => void;
  }
  
  function CustomCharactersTable({ characters, deleteCharacter }: CustomCharactersTableProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();
  
    return (
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
                <TableCell>{character.height}</TableCell>
                <TableCell>{character.homeworld}</TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default CustomCharactersTable;
  