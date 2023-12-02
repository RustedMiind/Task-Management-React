import { Stack } from "@mui/material";
import SectionTitle from "../../../../../components/SectionTitle";
import TaskCard from "./TaskCard";

function CompletedTasks() {
  return (
    <Stack>
      <SectionTitle title="Completed Tasks" />
      <Stack
        direction="row"
        spacing={2}
        sx={{ maxWidth: 1, overflowX: { xs: "auto", md: "hidden" } }}
      >
        <TaskCard unique />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Stack>
    </Stack>
  );
}

export default CompletedTasks;
