import { Stack, Typography } from "@mui/material";

function WelcomeMessage() {
  return (
    <Stack>
      <Typography variant="body2" fontWeight={500} color="primary.main">
        Welcome Back!
      </Typography>
      <Typography variant="h6" color="text.primary">
        Ali Soliman
      </Typography>
    </Stack>
  );
}

export default WelcomeMessage;
