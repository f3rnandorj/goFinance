import { ThemeProvider } from "styled-components";

import { Dashboard } from "./src/screens/Dashboard";

import theme from "global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
