import { Stack } from "@mui/material";
import SectionTitle from "../../../../../components/SectionTitle";
import TaskCard from "./TaskCard";

function CompletedTasks() {
  return (
    <Stack>
      <SectionTitle title="Completed Tasks" />
      <TaskCard unique />
    </Stack>
  );
}

export default CompletedTasks;
