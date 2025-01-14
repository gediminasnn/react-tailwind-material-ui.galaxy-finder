import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Divider,
} from '@mui/material'

interface CharacterDetails {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
}

function CharacterDetailsPage() {
  const { id } = useParams()
  const { t } = useTranslation()

  const [character, setCharacter] = useState<CharacterDetails | null>(null)
  const [homeworldName, setHomeworldName] = useState('')
  const [films, setFilms] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/people/${id}/`)
        const data: CharacterDetails & { detail?: string } = await res.json()

        if (data.detail === 'Not found') {
          setCharacter(null)
          return
        }

        setCharacter(data)

        if (data.homeworld) {
          const hwRes = await fetch(data.homeworld)
          const hwData = await hwRes.json()
          setHomeworldName(hwData.name || '')
        }

        if (data.films && data.films.length > 0) {
          const filmPromises = data.films.map((filmUrl: string) =>
            fetch(filmUrl).then((r) => r.json())
          )
          const filmData = await Promise.all(filmPromises)
          const filmTitles = filmData.map((film) => film.title)
          setFilms(filmTitles)
        }
      } catch (error) {
        console.error('Error fetching character:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) {
    return (
      <div className="text-center mt-10">
        <CircularProgress />
      </div>
    )
  }

  if (!character) {
    return (
      <Typography variant="h5" color="error">
        {t('characterNotFound')}
      </Typography>
    )
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {character.name}
        </Typography>
        <Divider className="my-2" />

        <Typography variant="body1"><strong>{t('height')}:</strong> {character.height}</Typography>
        <Typography variant="body1"><strong>{t('mass')}:</strong> {character.mass}</Typography>
        <Typography variant="body1"><strong>{t('hairColor')}:</strong> {character.hair_color}</Typography>
        <Typography variant="body1"><strong>{t('skinColor')}:</strong> {character.skin_color}</Typography>
        <Typography variant="body1"><strong>{t('eyeColor')}:</strong> {character.eye_color}</Typography>
        <Typography variant="body1"><strong>{t('birthYear')}:</strong> {character.birth_year}</Typography>
        <Typography variant="body1"><strong>{t('gender')}:</strong> {character.gender}</Typography>

        {homeworldName && (
          <Typography variant="body1">
            <strong>{t('homeworld')}:</strong> {homeworldName}
          </Typography>
        )}

        {films.length > 0 && (
          <>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>{t('films')}:</strong>
            </Typography>
            <ul>
              {films.map((filmTitle) => (
                <li key={filmTitle}>
                  <Typography variant="body2">{filmTitle}</Typography>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default CharacterDetailsPage
