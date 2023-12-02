import { Stack, Typography } from "@mui/material";
import DetailCard from "./DetailCard";

function TitleAndDate() {
  return (
    <Stack>
      <Typography gutterBottom variant="h5">
        Real Estate App Design
      </Typography>
      <DetailCard />
    </Stack>
  );
}

export default TitleAndDate;
