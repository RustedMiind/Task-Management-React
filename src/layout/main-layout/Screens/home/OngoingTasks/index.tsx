import { Stack } from "@mui/material";
import SectionTitle from "../../../../../components/SectionTitle";
import TaskCard from "./TaskCard";

function OngoingTasks() {
  return (
    <Stack>
      <SectionTitle title="Ongoing Tasks" />
      <Stack spacing={2}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Stack>
    </Stack>
  );
}

export default OngoingTasks;
