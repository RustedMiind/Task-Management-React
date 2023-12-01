import { Button, ButtonProps } from "@mui/material";

function SquareButton(props: PropsType) {
  let actualLength: number;
  switch (props.sideLength) {
    case "medium":
      actualLength = 56;
      break;
    case "small":
      actualLength = 36;
      break;
    default:
      actualLength = props.sideLength || 56;
      break;
  }

  return (
    <Button
      variant="contained"
      {...props.buttonProps}
      sx={{
        ...props.buttonProps.sx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0,
        minWidth: 0,
        minHeight: 0,
        width: actualLength,
        height: actualLength,
      }}
    ></Button>
  );
}

export default SquareButton;

type PropsType = {
  sideLength?: number | "small" | "medium";
  buttonProps: ButtonProps;
};
