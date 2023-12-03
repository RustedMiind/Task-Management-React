import { Box, Stack, Typography } from "@mui/material";
import SquareButton from "../../../../../components/SquareButton";
import { ReactNode } from "react";

function DetailCard(props: PropsType) {
  return (
    <Stack width={1} spacing={1} direction="row">
      <SquareButton>{props.icon}</SquareButton>
      <Box pt={0.5}>
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
        {typeof props.content === "string" ? (
          <Typography variant="h6" fontWeight={700} lineHeight={"1em"}>
            {props.content}
          </Typography>
        ) : (
          props.content
        )}
      </Box>
    </Stack>
  );
}

type PropsType = {
  icon: ReactNode;
  title: string;
  content: string | ReactNode;
};

export default DetailCard;
