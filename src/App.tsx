import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "routes";
import { GlobalContext } from "utils/useGlobalContext";

function App() {
  const [data, setData] = useState<string>("");
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
