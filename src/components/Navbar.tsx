import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher.tsx';
import theme from '../theme.ts';

function Navbar() {
  const { t } = useTranslation();

  const navItems = [
    { label: t('navHome'), path: '/' },
    { label: t('navCustomCharacters'), path: '/custom-characters' },
    { label: t('navSearch'), path: '/search' },
    { label: t('navContact'), path: '/contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Button key={item.label} color="inherit" component={NavLink} to={item.path}>
          {item.label}
        </Button>
      ))}
      <LanguageSwitcher
        fontSize={theme.typography.body2.fontSize as string}
        padding={theme.spacing(0, 1)}
      />
    </>
  );
}

export default Navbar;
