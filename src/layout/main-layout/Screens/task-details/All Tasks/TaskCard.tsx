import { Box, Paper, Typography } from "@mui/material";
import SquareButton from "../../../../../components/SquareButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function TaskCard(props: PropsType) {
  return (
    <Box
      component={Paper}
      padding={1}
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5">{props.title}</Typography>
      <SquareButton>
        {props.checked ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
      </SquareButton>
    </Box>
  );
}

type PropsType = {
  title: string;
  checked: boolean;
};

export default TaskCard;
