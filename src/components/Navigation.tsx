import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DrawerMenu from './DrawerMenu.tsx';
import Navbar from './Navbar.tsx';

function Navigation() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('navHome'), path: '/' },
    { label: t('navCustomCharacters'), path: '/custom-characters' },
    { label: t('navSearch'), path: '/search' },
    { label: t('navContact'), path: '/contact' },
  ];

  const handleDrawerToggle = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{flexGrow: 1,}}
        >
          Galaxy Finder
        </Typography>
        {isSmallScreen ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle(true)}
            >
              <MenuIcon />
            </IconButton>
            <DrawerMenu
              open={drawerOpen}
              toggleDrawer={setDrawerOpen}
              items={navItems}
            />
          </>
        ) : (
          <Navbar />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
