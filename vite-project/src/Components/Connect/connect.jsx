import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Connect = () => {
  return (
    <Box 
      sx={{
        p: 4,
        backgroundColor: '#374151',
        textAlign: 'center',
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Connect With Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        I&apos;m always excited to collaborate, discuss new ideas, or simply connect. Feel free to reach out!
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<Email />}
          href="mailto:yousefnajeh3@gmail.com"
          >
          Email Me
        </Button>

        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/yousef-najeh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="primary"
          href="https://github.com/yousef-najeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Connect;
