import { Stack } from "@mui/material";
import TitleAndDate from "./TitleAndDate";
import Details from "./Details";
import Progress from "./Progress";

function TaskDetails() {
  return (
    <Stack spacing={4} py={2}>
      <TitleAndDate />
      <Details title={DETAILS_TITLE} description={DESCRIPTION} />
      <Progress title={PROGRESS_TITLE} progress={70} />
    </Stack>
  );
}

const DETAILS_TITLE = "Project Details",
  DESCRIPTION =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  PROGRESS_TITLE = "Project Progress";
export default TaskDetails;
