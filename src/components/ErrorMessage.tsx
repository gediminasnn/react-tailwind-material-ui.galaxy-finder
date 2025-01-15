import { Typography } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Typography variant="h6" color="error" align="center">
      {message}
    </Typography>
  );
}

export default ErrorMessage;
