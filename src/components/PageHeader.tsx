import { Typography } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header>
      <Typography variant="h4">{title}</Typography>
      {subtitle && <Typography variant="body1">{subtitle}</Typography>}
    </header>
  );
}

export default PageHeader;
