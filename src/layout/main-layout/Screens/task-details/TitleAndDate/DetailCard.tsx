import { Box, Stack, Typography } from "@mui/material";
import SquareButton from "../../../../../components/SquareButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function DetailCard() {
  return (
    <Stack width={1} spacing={1} direction="row">
      <SquareButton>
        <CalendarMonthIcon />
      </SquareButton>
      <Box pt={0.5}>
        <Typography variant="body2" color="text.secondary">
          Due Date
        </Typography>
        <Typography variant="h6" fontWeight={700} lineHeight={"1em"}>
          06 June
        </Typography>
      </Box>
    </Stack>
  );
}

export default DetailCard;
