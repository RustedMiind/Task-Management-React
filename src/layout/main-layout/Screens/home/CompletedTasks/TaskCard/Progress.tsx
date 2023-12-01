import { Stack, LinearProgress, Typography } from "@mui/material";

function Progress(props: PropsType) {
  return (
    <Stack color={props.dark ? "background.default" : "text.primary"}>
      <Stack
        direction="row"
        alignItems="center"
        mb={0.5}
        justifyContent="space-between"
      >
        <Typography variant="body1">
          {props.progress === 100 ? "Completed" : "In progress"}
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          {props.progress}%
        </Typography>
      </Stack>
      <LinearProgress
        value={props.progress}
        variant="determinate"
        color={"inherit"}
        sx={{ height: 8, borderRadius: 1 }}
      />
    </Stack>
  );
}

type PropsType = {
  progress: number;
  dark?: boolean;
};

export default Progress;
