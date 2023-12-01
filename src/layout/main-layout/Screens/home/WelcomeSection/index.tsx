import { Box } from "@mui/material";
import WelcomeMessage from "./WelcomeMessage";
import Avatar from "./Avatar";

function WelcomeSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <WelcomeMessage />
      <Avatar />
    </Box>
  );
}

export default WelcomeSection;
