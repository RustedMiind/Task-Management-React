import { Stack, Typography } from "@mui/material";

function Details(props: PropsType) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body2" color={"text.secondary"}>
        {props.description}
      </Typography>
    </Stack>
  );
}

type PropsType = {
  title: string;
  description: string;
};

export default Details;
