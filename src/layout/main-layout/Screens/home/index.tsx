import { Stack } from "@mui/material";
import WelcomeSection from "./WelcomeSection/";
import SearchTasks from "./SearchTasks";
import CompletedTasks from "./CompletedTasks";
import OngoingTasks from "./OngoingTasks";

function HomeScreen() {
  return (
    <Stack spacing={4}>
      <WelcomeSection />
      <SearchTasks />
      <CompletedTasks />
      <OngoingTasks />
    </Stack>
  );
}

export default HomeScreen;
