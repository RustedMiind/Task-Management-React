import {
  Box,
  Button,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useNavigation, useLocation, useNavigate } from "react-router-dom";
import separatePath from "../../../methods/separatePath";

function AppBar(props: PropsType) {
  const TRANSISION_TIME: number = 400;
  const isTitleString = typeof props.title === "string";
  const navigate = useNavigate();
  const location = useLocation();
  const paths = separatePath(location.pathname);
  const [isBarVisible, setIsBarVisible] = useState(false);
  useEffect(() => {
    if (props.isVisible) {
      setIsBarVisible(true);
    } else {
      handleHide();
    }
  }, [props.isVisible]);
  function handleHide() {
    setIsBarVisible(false);
    if (props.onHide) {
      setTimeout(props.onHide, TRANSISION_TIME);
    }
  }
  function goBackOne() {
    if (paths.length > 0) {
      const newPath = paths.slice(0, paths.length - 1).join("/");
      navigate({ pathname: newPath });
    }
  }
  return (
    <Box>
      <Toolbar
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          transition: `${TRANSISION_TIME}ms`,
          maxHeight: isBarVisible ? 56 : 0,
          pointerEvents: isBarVisible ? "all" : "none",
          overflow: "hidden",
          minHeight: isBarVisible ? undefined : 0,
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={goBackOne}
        >
          <ArrowBackIcon />
        </IconButton>
        {isTitleString ? (
          <Typography
            variant="h6"
            component="div"
            textAlign="center"
            fontWeight={500}
            sx={{ flexGrow: 1, px: 1 }}
          >
            {props.title}
          </Typography>
        ) : (
          <Box sx={{ flexGrow: 1 }}>{props.title}</Box>
        )}
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2 }}
          disabled
        >
          <MenuIcon sx={{ opacity: 0 }} />
        </IconButton>
      </Toolbar>
    </Box>
  );
}

type PropsType = {
  isVisible?: boolean;
  onHide?: () => void;
  title?: string | React.ReactElement;
};

export default AppBar;
