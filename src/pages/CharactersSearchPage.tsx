import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid2,
} from '@mui/material'

interface StarWarsCharacter {
  name: string
  url: string
}

function CharactersSearchPage() {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const trimmed = query.trim()

    if (!trimmed) {
      setCharacters([])
      return
    }

    const fetchCharacters = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${apiBaseUrl}/api/people/?search=${trimmed}`)
        const data = await res.json()

        setCharacters(data.results || [])
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [query])

  const getCharacterIdFromUrl = (url: string) => {
    const parts = url.split('/').filter(Boolean)
    return parts[parts.length - 1]
  }

  const handleRowClick = (url: string) => {
    const id = getCharacterIdFromUrl(url)
    navigate(`/character/${id}`)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {t('searchCharactersHeading')}
        </Typography>

        <Grid2 container spacing={3} alignItems="center">
          <Grid2 size={12}>
            <TextField
              label={t('characterNameLabel')}
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              fullWidth
              autoComplete="off"
            />
          </Grid2>
        </Grid2>

        {loading && (
          <div className="text-center my-4">
            <CircularProgress />
          </div>
        )}

        {!loading && characters.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: 'primary.main' }}>
                <TableRow>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>
                    {t('tableHeaderName')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characters.map((char) => (
                  <TableRow
                    key={char.name}
                    hover
                    onClick={() => handleRowClick(char.url)}
                    className="cursor-pointer"
                  >
                    <TableCell>{char.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {!loading && query.trim() && characters.length === 0 && (
          <Typography variant="body1" color="error" className="mt-4">
            {t('noResultsFoundFor', { query })}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default CharactersSearchPage
