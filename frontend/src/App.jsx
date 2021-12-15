import PageContainer from "./components/pageContainer/PageContainer";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <PageContainer />
    </div>
  );
}

export default App;
