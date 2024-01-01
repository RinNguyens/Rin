import {
  MantineProvider,
  createTheme,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import "./App.css";

import { Outlet } from "react-router-dom";

const theme = createTheme({
  headings: {
    fontFamily: "JetBrainsMono Nerd Font",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
  focusRing: 'always'
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Outlet />
    </MantineProvider>
  );
}

export default App;
