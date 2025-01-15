import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid2,
  CircularProgress,
  Stack,
  TextField,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CharacterDetails } from '../interfaces/CharacterDetails.tsx';

function UpsertCustomCharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CharacterDetails>({
    defaultValues: {
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
    },
  });

  useEffect(() => {
    if (isNew) {
      setLoading(false);
      return;
    }

    const fetchCharacter = async () => {
      try {
        const res = await fetch(`http://localhost:5000/characters/${id}`);
        const data: CharacterDetails = await res.json();
        reset(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id, isNew, reset]);

  const onSubmit = async (data: CharacterDetails) => {
    const url = `http://localhost:5000/characters${isNew ? '' : `/${id}`}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      navigate('/custom-characters');
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {isNew ? t('addCharacter') : t('editCharacter')}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={3} className="mt-2">
            <Grid2 size={12}>
              <TextField
                label={t('characterNameLabel')}
                variant="outlined"
                fullWidth
                {...register('name', {
                  required: t('nameIsRequiredValidationLabel'),
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('height')}
                variant="outlined"
                fullWidth
                {...register('height', {
                  required: t('heightRequiredValidationLabel'),
                })}
                error={!!errors.height}
                helperText={errors.height?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('mass')}
                variant="outlined"
                fullWidth
                {...register('mass', {
                  required: t('massRequiredValidationLabel'),
                })}
                error={!!errors.mass}
                helperText={errors.mass?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('hairColor')}
                variant="outlined"
                fullWidth
                {...register('hair_color', {
                  required: t('hairColorRequiredValidationLabel'),
                })}
                error={!!errors.hair_color}
                helperText={errors.hair_color?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('skinColor')}
                variant="outlined"
                fullWidth
                {...register('skin_color', {
                  required: t('skinColorRequiredValidationLabel'),
                })}
                error={!!errors.skin_color}
                helperText={errors.skin_color?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('eyeColor')}
                variant="outlined"
                fullWidth
                {...register('eye_color', {
                  required: t('eyeColorRequiredValidationLabel'),
                })}
                error={!!errors.eye_color}
                helperText={errors.eye_color?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('birthYear')}
                variant="outlined"
                fullWidth
                {...register('birth_year', {
                  required: t('birthYearRequiredValidationLabel'),
                })}
                error={!!errors.birth_year}
                helperText={errors.birth_year?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('gender')}
                variant="outlined"
                fullWidth
                {...register('gender', {
                  required: t('genderRequiredValidationLabel'),
                })}
                error={!!errors.gender}
                helperText={errors.gender?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('homeworld')}
                variant="outlined"
                fullWidth
                {...register('homeworld', {
                  required: t('homeworldRequiredValidationLabel'),
                })}
                error={!!errors.homeworld}
                helperText={errors.homeworld?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label={t('films')}
                variant="outlined"
                fullWidth
                {...register('films')}
                placeholder={t('filmsPlaceholder')}
                error={!!errors.films}
                helperText={errors.films?.message}
              />
            </Grid2>
            <Grid2 size={12}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" type="submit">
                  {t('saveButtonLabel')}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate('/custom-characters')}
                >
                  {t('cancelButtonLabel')}
                </Button>
              </Stack>
            </Grid2>
          </Grid2>
        </form>
      </CardContent>
    </Card>
  );
}

export default UpsertCustomCharacterPage;
