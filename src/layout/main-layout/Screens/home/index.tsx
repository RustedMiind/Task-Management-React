import { Stack } from "@mui/material";
import WelcomeSection from "./WelcomeSection/";
import SearchTasks from "./SearchTasks";

function HomeScreen() {
  return (
    <Stack spacing={2}>
      <WelcomeSection />
      <SearchTasks />
    </Stack>
  );
}

export default HomeScreen;
