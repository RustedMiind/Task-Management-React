import { Grid, Stack, Typography } from "@mui/material";
import DetailCard from "./DetailCard";

// Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import CustomAvatarGroup from "../../../../../components/CustomAvatarGroup";

function TitleAndDate() {
  return (
    <Stack spacing={2}>
      <Typography gutterBottom variant="h5">
        Real Estate App Design
      </Typography>
      <Grid container>
        <Grid item xs={6} md={4} lg={2}>
          <DetailCard
            icon={<CalendarMonthIcon />}
            title={"Due Date"}
            content={"20 June"}
          />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <DetailCard
            icon={<CalendarMonthIcon />}
            title={"Project Team"}
            content={
              <CustomAvatarGroup
                max={5}
                size={20}
                avatars={[{}, {}, {}, {}, {}]}
              />
            }
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default TitleAndDate;
