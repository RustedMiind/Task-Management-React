import { Paper, Stack } from "@mui/material";
import Title from "./Title";
import TeamMembers from "./TeamMembers";
import Progress from "./Progress";

function TaskCard(props: PropsType) {
  const BOX_SIDE_LENGTH = 180;

  return (
    <Stack
      component={Paper}
      bgcolor={props.unique ? "primary.main" : undefined}
      color={props.unique ? "background.default" : undefined}
      sx={{ width: (BOX_SIDE_LENGTH * 5) / 4, height: BOX_SIDE_LENGTH, p: 1.5 }}
      gap={1}
      justifyContent="space-between"
    >
      <Title />
      <TeamMembers variant={props.unique ? "dark" : "light"} />
      <Progress progress={74} dark={props.unique} />
    </Stack>
  );
}

type PropsType = {
  unique?: boolean;
};

export default TaskCard;
