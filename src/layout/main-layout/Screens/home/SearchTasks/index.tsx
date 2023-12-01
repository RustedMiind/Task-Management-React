import { Stack, TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchTasks() {
  return (
    <Stack direction="row" spacing={1}>
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          fullWidth
          label="Search tasks"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Stack>
  );
}

export default SearchTasks;
