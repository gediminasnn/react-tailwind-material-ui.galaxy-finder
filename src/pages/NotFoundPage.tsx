import { ErrorOutline } from '@mui/icons-material'
import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col justify-center items-center text-center">
      <ErrorOutline fontSize="large" sx={{ color: 'red', mb: 2 }} />
      <Typography variant="h2" gutterBottom>
        {t('notFoundTitle')}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {t('notFoundSubtitle')}
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to="/">
        {t('goHome')}F
      </Button>
    </section>
  )
}

export default NotFoundPage
