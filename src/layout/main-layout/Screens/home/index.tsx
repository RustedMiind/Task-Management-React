import { Stack } from "@mui/material";
import WelcomeSection from "./WelcomeSection/";
import SearchTasks from "./SearchTasks";
import CompletedTasks from "./CompletedTasks";

function HomeScreen() {
  return (
    <Stack spacing={4}>
      <WelcomeSection />
      <SearchTasks />
      <CompletedTasks />
    </Stack>
  );
}

export default HomeScreen;
