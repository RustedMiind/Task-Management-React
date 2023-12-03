import { Stack, Typography } from "@mui/material";
import CircularProgressWithLabel from "../../../../../components/CircularProgressWithLabel";

function Progress(props: PropsType) {
  return (
    <Stack direction="row" gap={1}>
      <Typography variant="h5" flexGrow={1}>
        {props.title}
      </Typography>
      <CircularProgressWithLabel value={props.progress} />
    </Stack>
  );
}

type PropsType = {
  title: string;
  progress: number;
};

export default Progress;
