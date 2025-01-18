import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";

export const App = () => (
  <Stack>
    <NavBar />
    <Box padding={2}>
      <Outlet />
    </Box>
  </Stack>
);

export default App;
