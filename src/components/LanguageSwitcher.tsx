import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  fontSize: string;
  padding: string;
}

function LanguageSwitcher({ fontSize, padding }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'lt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      sx={{
        padding,
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={toggleLanguage}
    >
      <Typography sx={{ fontSize }}>
        {t('languageSwitch')}
      </Typography>
    </Button>
  );
}

export default LanguageSwitcher;
