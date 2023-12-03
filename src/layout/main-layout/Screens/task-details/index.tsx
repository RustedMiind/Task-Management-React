import { Stack } from "@mui/material";
import TitleAndDate from "./TitleAndDate";
import Details from "./Details";
import Progress from "./Progress";
import AllTasks from "./All Tasks";

function TaskDetails() {
  return (
    <Stack spacing={4} py={2}>
      <TitleAndDate />
      <Details title={DETAILS_TITLE} description={DESCRIPTION} />
      <Progress title={PROGRESS_TITLE} progress={70} />
      <AllTasks title={TASKS_TITLE} tasks={TASKS} />
    </Stack>
  );
}

const DETAILS_TITLE = "Project Details",
  DESCRIPTION =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  PROGRESS_TITLE = "Project Progress",
  TASKS_TITLE = "Tasks",
  TASKS: { name: string; done?: boolean }[] = [
    { name: "User Interviews", done: true },
    { name: "Wireframes", done: true },
    { name: "Design System", done: true },
    { name: "Icons", done: true },
    { name: "Final Mockups", done: false },
    { name: "Real Estate App Design", done: false },
  ];
export default TaskDetails;
