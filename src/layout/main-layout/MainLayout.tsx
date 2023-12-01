import Box from "@mui/material/Box";
import BottomNavigation from "./components/BottomNavigation";
import { Children } from "../../types/Children";
import { Stack } from "@mui/material";
import AppBar from "./components/AppBar";

export default function MainLayout(props: PropsType) {
  return (
    <Stack>
      <AppBar isVisible={true} title={"News"} />
      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          p: 2,
        }}
      >
        {props.children}
      </Box>
      <BottomNavigation />
    </Stack>
  );
}

type PropsType = {
  children?: Children;
};
