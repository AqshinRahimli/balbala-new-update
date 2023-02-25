import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { RouteLayout } from "./Components/RouteLayout";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouteLayout />
    </ChakraProvider>
  );
}

export default App;
