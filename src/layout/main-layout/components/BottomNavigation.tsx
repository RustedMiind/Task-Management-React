import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";

function Navbar(props: PropsType) {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: "secondary.main",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Chat" icon={<FavoriteIcon />} />
        {/* <BottomNavigationAction
          icon={
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "cetner",
                width: 35,
                height: 35,
                minWidth: 0,
                minHeight: 0,
                p: 0,
                color: "secondary",
              }}
            >
              <AddIcon />
            </Button>
          }
        /> */}
        <BottomNavigationAction label="Calendar" icon={<CalendarMonthIcon />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

type PropsType = {
  // width: number;
};

export default Navbar;
