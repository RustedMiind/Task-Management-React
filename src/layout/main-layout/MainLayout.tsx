import Box from "@mui/material/Box";
import BottomNavigation from "./components/BottomNavigation";
import { Children } from "../../types/Children";
import { Stack } from "@mui/material";
import AppBar from "./components/AppBar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import separatePath from "../../methods/separatePath";

export default function MainLayout(props: PropsType) {
  const location = useLocation();
  const paths = separatePath(location.pathname);
  const showAppBar = paths.length > 0;
  const [includeAppBar, setIncludeAppBar] = useState(false);
  useEffect(() => {
    if (showAppBar) {
      handleIncludeAppBar();
    }
  }, [showAppBar]);

  function handleExcludeAppBar() {
    setIncludeAppBar(false);
  }
  function handleIncludeAppBar() {
    setIncludeAppBar(true);
  }
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {includeAppBar && (
        <AppBar
          isVisible={showAppBar}
          onHide={handleExcludeAppBar}
          // onShow={handleIncludeAppBar}
          title={"News"}
        />
      )}
      <Box
        component="main"
        sx={{
          p: 1,
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
