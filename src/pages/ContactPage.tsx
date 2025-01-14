import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  Grid2
} from '@mui/material'

interface ContactFormInputs {
  name: string
  email: string
  message: string
}

function ContactPage() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data: ContactFormInputs) => {
    localStorage.setItem('contactForm', JSON.stringify(data))
    reset()
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {t('contactPageHeading')}
        </Typography>

        {isSubmitSuccessful && (
          <Alert severity="success" className="mb-4">
            {t('contactSubmitSuccess')}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={3} className="mt-2">
            <Grid2 size={12}>
              <TextField
                label={t('contactNameLabel')}
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
                label={t('contactEmailLabel')}
                variant="outlined"
                fullWidth
                {...register('email', {
                  required: t('emailIsRequiredValidationLabel'),
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: t('invalidEmailFormatValidationLabel'),
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid2>

            <Grid2 size={12}>
              <TextField
                label={t('contactMessageLabel')}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                {...register('message', {
                  required: t('messageRequiredValidationLabel'),
                })}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Grid2>

            <Grid2 size={12}>
              <Button variant="contained" color="primary" type="submit">
                {t('contactSubmitBtn')}
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactPage
