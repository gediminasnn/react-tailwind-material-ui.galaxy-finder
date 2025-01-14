import { Card, CardContent, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function HomePage() {
  const { t } = useTranslation()

  return (
    <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <CardContent
        sx={{
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: '#fff',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography variant="h3" gutterBottom>
          {t('homePageTitle')}
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          {t('homePageSubtitle')}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/search"
          sx={{ mr: 2 }}
        >
          {t('startSearching')}
        </Button>

        <Button variant="outlined" color="inherit" component={Link} to="/contact">
          {t('contactUs')}
        </Button>
      </CardContent>
    </Card>
  )
}

export default HomePage
