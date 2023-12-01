import { Stack, TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SquareButton from "../../../../../components/SquareButton";
import TuneIcon from "@mui/icons-material/Tune";

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
      <SquareButton>
        <TuneIcon />
      </SquareButton>
    </Stack>
  );
}

export default SearchTasks;
