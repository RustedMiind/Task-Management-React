import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CircularProgress, Stack } from "@mui/material";
import CircularProgressWithLabel from "../../../../../../components/CircularProgressWithLabel";
import CustomAvatarGroup from "../../../../../../components/CustomAvatarGroup";

function TaskCard() {
  const ProgressValue = Math.round(Math.random() * 100);

  return (
    <Card>
      <Stack>
        <CardContent
          sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}
        >
          <Stack flexGrow={1}>
            <Typography variant="h5">Mobile App Wireframe</Typography>
            <Typography sx={{}} color="text.secondary">
              Team Members
            </Typography>
            <CustomAvatarGroup
              max={3}
              size={26}
              avatars={[
                { alt: "ali" },
                { alt: "ali" },
                { alt: "ali" },
                { alt: "ali" },
                { alt: "ali" },
                { alt: "ali" },
                { alt: "ali" },
                { alt: "ali" },
              ]}
            />
            <Typography mt={1}>Due on : 21 March</Typography>
          </Stack>
          <CircularProgressWithLabel value={ProgressValue} />
        </CardContent>
      </Stack>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default TaskCard;
