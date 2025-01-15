import { CircularProgress, Box } from '@mui/material';

function LoadingSpinner() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;
