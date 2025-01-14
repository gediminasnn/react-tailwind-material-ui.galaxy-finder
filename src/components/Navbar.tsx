import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme, styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  '&.active': {
    borderBottom: '2px solid #fff',
  },
}))

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
}))

const BrandNavLink = styled(NavLink)(() => ({
  color: '#fff',
  textDecoration: 'none',
}))

function ResponsiveNavbar() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'lt' : 'en'
    i18n.changeLanguage(newLang)
  }

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <BrandNavLink to="/" style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Galaxy Finder
            </Typography>
          </BrandNavLink>
        </div>

        {isSmallScreen ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                },
              }}
            >
              <List
                sx={{ width: 250 }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItem>
                  <ListItemText>
                    <StyledNavLink to="/">{t('navHome')}</StyledNavLink>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <StyledNavLink to="/search">{t('navSearch')}</StyledNavLink>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <StyledNavLink to="/contact">{t('navContact')}</StyledNavLink>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <StyledButton onClick={toggleLanguage}>
                    <ListItemText>
                      {t('languageSwitch')}
                    </ListItemText>
                  </StyledButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <StyledNavLink to="/">
              <StyledButton>{t('navHome')}</StyledButton>
            </StyledNavLink>
            <StyledNavLink to="/search">
              <StyledButton>{t('navSearch')}</StyledButton>
            </StyledNavLink>
            <StyledNavLink to="/contact">
              <StyledButton>{t('navContact')}</StyledButton>
            </StyledNavLink>
            <StyledButton onClick={toggleLanguage}>
              {t('languageSwitch')}
            </StyledButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default ResponsiveNavbar

