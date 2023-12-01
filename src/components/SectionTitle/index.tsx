import { Button, Stack, Typography, ButtonProps } from "@mui/material";

function SectionTitle(props: PropsType) {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h6" fontWeight={700} flexGrow={1}>
        {props.title}{" "}
      </Typography>
      <Button {...props.buttonProps}>See all</Button>
    </Stack>
  );
}

type PropsType = {
  title: string;
  buttonProps?: ButtonProps;
};

export default SectionTitle;
