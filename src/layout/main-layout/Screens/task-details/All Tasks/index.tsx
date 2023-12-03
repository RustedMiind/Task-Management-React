import { Stack, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

function AllTasks(props: PropsType) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        {props.title}
      </Typography>
      <Stack spacing={1}>
        {props.tasks?.map((task) => (
          <TaskCard title={task.name} checked={!!task.done} />
        ))}
      </Stack>
    </Stack>
  );
}

type PropsType = {
  title: string;
  tasks: { name: string; done?: boolean }[];
};

export default AllTasks;
