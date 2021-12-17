import PageContainer from "./components/pageContainer/PageContainer";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <div>
          <Toaster />
        </div>
        <PageContainer />
      </ChakraProvider>
    </div>
  );
}

export default App;
