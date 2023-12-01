import { Typography } from "@mui/material";

function Title() {
  return (
    <Typography
      variant="h6"
      sx={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: 3, // Limit to 3 lines
        maxHeight: "calc(1.2em * 3)", // Change this value according to your font size and line height
        maxWidth: 0.8,
        lineHeight: "1.2em",
        textTransform: "uppercase",
      }}
    >
      Hello There Mr ali hello again
    </Typography>
  );
}

export default Title;
